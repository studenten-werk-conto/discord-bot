const errors = require("../../utils/errors.js");
const { GetChannelId } = require("../../utils/index.js");
const botconfig = require("../../botconfig.json");
const Discord = require("discord.js");
const MeetinggetData = require("./utils/MeetingGetDescription.js");


async function MeetingGet(bot, message, args){
    const data = await MeetinggetData(args)
    const embed = new Discord.MessageEmbed()
    /*
     * Alternatively, use "#3498DB", [52, 152, 219] or an integer number.
     */
    .setColor(0x3498DB)
    .setTitle(`atendance report for user: ${data.username}`)
    .setDescription(data.presence)

    .setTimestamp()
    /*
     * With Discord now allowing messages to contain up to 10 embeds, we need to put it in an array.
     */
    message.channel.send({ embeds: [embed] });
}
module.exports = MeetingGet;