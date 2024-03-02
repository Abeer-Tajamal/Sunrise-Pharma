const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const emailTemplate = require("./emailTemplate.js");
const pdf = require("html-pdf");
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

// Endpoint to handle form data and send email
app.post("/send-data", (req, res) => {
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

  // Construct email message with the received data
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Your Form Data",
    html: emailTemplate(
      firstName,
      lastName,
      email,
      phone,
      dateofbirth,
      deliverType,
      address,
      medicines
    ),
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    }
  });
});

app.post("/send-data", (req, res) => {
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

  const outputPath = "Medicine.pdf";
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

  const convertHtmlToPdf = pdf
    .create(htmlContent)
    .toFile(outputPath, (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("PDF created successfully:", res.filename);
      return res.filename;
    });

  // Construct email message with the received data
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    // to: "00842443838@print.brother.com",
    to: process.env.SENDER_EMAIL,
    attachments: [{ path: convertHtmlToPdf }],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
