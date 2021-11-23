require("dotenv").config({

    path: ".env",
  
  });

const express = require ("express");
const path = require ("path");
// const { send } = require("process");
const app = express();
const {pars_host}=require("tld-extract")
const port = 8080;
const nodemailer = require('nodemailer');

// stap 1 user krijgt form te zien waar diegene email kan invullen
app.get("/index.html",async(req, res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
    res.status(200);
})
//stap 2
app.get("/sendmail",async(req, res)=>{
  
  // TODO insert the email into the db


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.password
      }
    });

    const mailOptions = {
      from: process.env.email,
      to: req.query.email,
      subject: 'verificatie discord server',
      text: `hallo
      
      http://localhost:8080/track?trackid=${req.query.trackid}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    console.log(req.query);
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200);
    res.send();
})

// stap 3 
app.get("/track",async(req, res)=>{
    // update the status of the conformation

    console.log(req.query)
    res.status(200).send({Response:req.query});
})

// port
app.listen(port);
console.log("server is online");





