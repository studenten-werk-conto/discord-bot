var nodemailer = require("nodemailer");

require("dotenv").config({
  path: ".env",
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function SendConfirmation(UserEmail, uuid) {
  var mailOptions = {
    from: "noreply@conto.gov",
    to: UserEmail,
    subject: "conformation",
    text: `
        goodmorning 
        <br>
        you signed blah blah blah <br>
        http://www.localhost/index.html?tracking=${uuid}

        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
module.exports = SendConfirmation;
