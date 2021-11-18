const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");
module.exports.noPerms = (message, perm) => {
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setTitle("not enough permission")
    .setColor(config.red)
    .addField("you need this permission: ", perm);

  message.channel.send(embed).then((m) => m.delete(5000));
};

module.exports.equalPerms = (message, user, perms) => {
  let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor(config.red)
    .setTitle("error")
    .addField(`${user} has permission: `, perms);

  message.channel.send(embed).then((m) => m.delete(5000));
};

module.exports.botuser = (message) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("error")
    .setDescription("you can't ban a bot")
    .setColor(config.red);
  message.channel.send(embed).then((m) => m.delete(5000));
};

module.exports.cantfindUser = (channel) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("error")
    .setDescription("can't find the given user")
    .setColor(config.red);

  channel.send(embed).then((m) => m.delete(5000));
};

module.exports.noReason = (channel) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("error")
    .setDescription("reason?")
    .setColor(config.red);

  channel.send(embed).then((m) => m.delete(5000));
};
