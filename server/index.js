const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const cors = require("cors");
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
    RxNumber,
    RxName,
  } = req.body;

  // Construct email message with the received data
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: "Your Form Data",
    html: `<div style="padding: 20px; background-color: #ffffff; border-radius: 10px">
    <h1 style="color: #333333; text-align: center">Sunrise Pharmacy</h1>
    <div style="border: 2px solid black; padding: 20px">
      <p>
        We are having an issue connecting to your Pharmacy Management System.
        You have receieved this email to ensure that your pharmacy receives
        all of
      </p>
      <p>
        the refill requested by your patients. If the problem persists please
        call our office toll free at (877) 959-7550 or email help@rxwiki.com.
        <strong> (Some Rx Numbers may be duplicated) </strong>
      </p>
    </div>
    <br />
    <div style="display: flex; justify-content: space-around">
      <table>
        <tr>
          <th>PATIENT INFO</th>
        </tr>
        <tr>
          <td style="border: 2px solid black">Full Name:</td>
          <td style="border: 2px solid black">${firstName}  ${lastName}</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Date of Birth:</td>
          <td style="border: 2px solid black">${dateofbirth}</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Email Address:</td>
          <td style="border: 2px solid black">${email}</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Phone Number:</td>
          <td style="border: 2px solid black">${phone}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>REFILL DETAILS</th>
        </tr>
        <tr>
          <td style="border: 2px solid black">Date Sent:</td>
          <td style="border: 2px solid black">${new Date()}</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Source:</td>
          <td style="border: 2px solid black">Website</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Refill Id:</td>
          <td style="border: 2px solid black">1234Teste562Data</td>
        </tr>
      </table>
    </div>
    <div style="display: flex; justify-content: flex-start">
      <table>
        <tr>
          <th>SUBMITTED PRESCRIPTIONS</th>
        </tr>
        <tr>
          <td style="border: 2px solid black">Rx Number</td>
          <td style="border: 2px solid black">${RxNumber}</td>
          <td style="border: 2px solid black">Medication</td>
          <td style="border: 2px solid black">${RxName}</td>
        </tr>
      </table>
    </div>
    <div style="display: flex; justify-content: space-around">
      <table>
        <tr>
          <th>DELIVERY METHOD</th>
        </tr>
        <tr>
          <td style="border: 2px solid black">Method:</td>
          <td style="border: 2px solid black">${deliverType}</td>
        </tr>
        <tr>
          <td style="border: 2px solid black">Address:</td>
          <td style="border: 2px solid black">${"address"}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th style="border-bottom: 2px solid black; text-align: left">
            PATIENT NOTES
          </th>
        </tr>
        <tr>
          <td>
            can you refill the methotrexate too please? I can't find the Rx
          </td>
        </tr>
        <tr>
          <td>
            number. Please deliver all 4 of these at the same time. Thanks.
          </td>
        </tr>
      </table>
    </div>
    <p>
      This HIPAA complaint email contains important medication refill
      information sumitted by your patients on your branded website or mobile
      app. For customer support or to modify or stop
    </p>
    <p>
      service call toll-free (877) 959-7550 or email
      help@digitalpharmacist.com.
    </p>
  </div>`,
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
