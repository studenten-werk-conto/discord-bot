const errors = require("../../utils/errors.js");
const Discord = require("discord.js");
const { MeetinggetData, PrivilegeCheck } = require("../../utils");

async function MeetingGet(bot, message, args) {
  if (!PrivilegeCheck(message))
    return errors.noPerms(message, "you no teacher");
  if (args.length === 1) return errors.cantfindUser(message.channel);

  const data = await MeetinggetData(args);
  const embed = new Discord.MessageEmbed()
    .setColor(0x3498db)
    .setTitle(`atendance report for user: ${data.username}`)
    .setDescription(data.presence)

    .setTimestamp();
  message.channel.send({ embeds: [embed] });
}
module.exports = MeetingGet;
