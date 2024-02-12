const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// Function to send an email
const sendEmail = (to) => {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: to,
    subject: "subject",
    html: `<div style="padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;">
    <h1 style = "color: #333333;
    text-align: center;">Sunrise Pharmacy</h1>
    <div style="  border: 2px solid black;
    padding: 20px;">
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
    <div>
      <h3>PATIENT INFO</h3>
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent to: " + to);
    }
  });
};

module.exports = sendEmail;
