const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor(0x3498db)
    .setTitle('hi welocme')
    .setURL(``)
    .setDescription('data.presence')

    .setTimestamp()
  member.send({ embeds: [embed] })
}

module.exports.help = {
  name: 'welcome',
}
