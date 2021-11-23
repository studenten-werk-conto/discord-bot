const express = require("express");
const path = require("path");
const { parse_host } = require("tld-extract");
const SendConfirmation = require("./utils/SendConfirmation");

const app = express();
const port = 8080;

// sendFile will go here
app.get("/index.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/track.html"));
});

app.get("/track", async (req, res) => {
  console.log(req.query);
  console.log(req.query.email);
  SendConfirmation(req.query.email, uuid);
  console.log(parse_host(req.query.email));

  res.status(200).send({ response: req.body });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
