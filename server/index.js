require("dotenv").config({
  path: ".env",
});

const express = require("express");
const path = require("path");
// const { send } = require("process");
const app = express();
const { parse_host } = require("tld-extract");
const port = 8080;
const nodemailer = require("nodemailer");
const { db_updateset, db_update } = require("./utils/database");
const AssignUserRole = require("./utils/AssignUserRole");

// stap 1 user krijgt form te zien waar diegene email kan invullen
app.get("/index.html", async (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
  res.status(200);
});
//stap 2
app.get("/sendmail", async (req, res) => {
  // TODO insert the email into the db
  db_update(
    "presence",
    { tracking_code: req.query.trackid },
    {
      email: req.query.email,
    }
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: process.env.email,
    to: req.query.email,
    subject: "verificatie discord server",
    text: `hallo
      
      http://localhost:8080/track?trackid=${req.query.trackid}&email=${req.query.email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log(req.query);
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200);
  res.send();
});

// stap 3
app.get("/track", async (req, res) => {
  // update the status of the conformation

  console.log(req.query);
  console.log(req.query.email);
  console.log(parse_host(req.query.email));

  const scarlett = parse_host(req.query.email);
  console.log(scarlett.sub);
  const result = scarlett.sub.split("@").pop(); // string after @
  console.log(result);

  const domain = scarlett.domain.substr(scarlett.domain.length - 6);
  // console.log(hallo);

  if (scarlett.sub == "") {
    // if scarlet.sub is "" that means that the user is not a student

    if (domain === "glu.nl") {
      console.log("docent");
      AssignUserRole("student", req.query.trackid);
    } else {
      console.log("student");
      AssignUserRole("student", req.query.trackid);
    }
  } else {
    console.log("student");
    AssignUserRole("student", req.query.trackid);
  }

  // res.status(200).send({ Response: req.query });
  res.status(200).send("succes you can now go to the server and click on the i have veriefied button");
});

// port
app.listen(port);
console.log("server is online");
