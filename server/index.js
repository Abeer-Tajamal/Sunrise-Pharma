const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const emailTemplate = require("./emailTemplate.js");
const pdf = require("html-pdf");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Configure nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Function to generate PDF from HTML content
function generatePDF(htmlContent) {
  return new Promise((resolve, reject) => {
    pdf.create(htmlContent).toFile("Medicine.pdf", (err, res) => {
      if (err) {
        console.error("Error creating PDF:", err);
        reject(err);
      } else {
        console.log("PDF created successfully:", res.filename);
        resolve(res.filename);
      }
    });
  });
}

// Function to read file asynchronously
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

app.post("/send-data", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dateofbirth,
    deliverType,
    address,
    medicines,
  } = req.body;

  const htmlContent = emailTemplate(
    firstName,
    lastName,
    email,
    phone,
    dateofbirth,
    deliverType,
    address,
    medicines
  );

  try {
    // Generate PDF from HTML content
    const pdfFilePath = await generatePDF(htmlContent);

    // Read PDF file asynchronously
    const pdfData = await readFileAsync(pdfFilePath);

    // Construct email message with the received data
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: [
        process.env.SENDER_EMAIL,
        email,
        // "00842443838@print.brother.com"
      ],
      subject: "Refill",
      html: htmlContent,
      attachments: [{ filename: "Medicine.pdf", content: pdfData }],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
