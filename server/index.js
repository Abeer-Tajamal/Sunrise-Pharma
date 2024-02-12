const express = require("express");
require("dotenv").config();
const sendEmail = require("./emailTemplate");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const toEmail = "abeertajamal@gmail.com";

// app.post("/send-mail", (req, res) => {
sendEmail(toEmail);
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
