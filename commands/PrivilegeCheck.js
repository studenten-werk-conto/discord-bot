const Discord = require("discord.js");
const errors = require("../utils/errors");

module.exports.run = (bot, message, args) => {
  console.log(message.mentions)
};

module.exports.help = {
  name: "PrivilegeCheck"
};