// const Discord = require("discord.js");
const errors = require('../utils/errors')
const { PrivilegeCheck } = require('../utils/PrivilegeCheck')

module.exports.run = (bot, message, args) => {
  // if (!message.member.hasPermission("BAN_MEMBERS"))
  //   return errors.noPerms(message, "BAN_MEMBERS");

  // if (args[0] === "help") {
  //   message.reply(".ban <user/id> <reason>");
  // }

  // const buser = message.guild.member(
  //   message.mentions.users.first() || message.guild.members.get(args[0])
  // );

  // if (!buser) return errors.cantfindUser(message.channel);
  // if (buser.id === bot.user.id)
  //   return message.channel.send("hey! you can't ban me :(");

  // let breason = args.join(" ").slice(23);
  // if (!breason) breason = "sorry, no reason has been given";

  // if (buser.id === message.author.id)
  //   return message.channel.send("why do you want to ban yourself????");

  // const banembed = new Discord.RichEmbed()
  //   .setThumbnail(bot.user.displayAvatarURL)
  //   .setDescription("**new ban**")
  //   .setColor("#bc000")
  //   .addField("user banned: ", buser.user.username)
  //   .addField("banned by: ", message.author.username)
  //   .addField("reason: ", breason);

  // message.guild.member(buser).ban(breason);
  // message.channel.send(banembed);

  if (PrivilegeCheck(message)) return errors.noPerms(message, 'BAN_MEMBERS')

  if (args.length == 0) return errors.cantfindUser(message.channel)

  console.log('\x1b[31m' + 'BANNED BANNED BANNED BANNED' + '\x1b[31m')
  // .ban
}

module.exports.help = {
  name: 'ban',
}
// .ban
