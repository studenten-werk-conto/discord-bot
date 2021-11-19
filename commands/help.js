const MessageDivider = require("../utils/MessageDivider");
const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("help menu")
    // .setDescription(MessageDivider(botconfig.help.description,4028))
    .setDescription(botconfig.help)
    .setColor(botconfig.red);

   message.channel.send({ embeds: [embed] }).then((m) => setTimeout(() => {m.delete()}, 5000));
};
  
  module.exports.help = {
    name: "help",
  };