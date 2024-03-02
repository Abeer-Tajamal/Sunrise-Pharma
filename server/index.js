const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const cors = require("cors");
const emailTemplate = require("./emailTemplate.js");
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

// Configure Twilio client with your Account SID and Auth Token
// const twilioClient = twilio(
//   "<your-twilio-account-sid>",
//   "<your-twilio-auth-token>"
// );

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

  // Send fax using Twilio
  // twilioClient.fax.faxes
  //   .create({
  //     from: "<your-twilio-phone-number>",
  //     to: "<recipient-fax-number>",
  //     mediaUrl: "https://example.com/fax-document.pdf", // Replace with the URL of your fax document
  //   })
  //   .then((fax) => {
  //     console.log("Fax sent:", fax.sid);
  //   })
  //   .catch((error) => {
  //     console.error("Error sending fax:", error);
  //   });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
