const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor(0x3498db)
    .setTitle('hi welocme')
    .setURL(`imaretarded.dev/tracking?trackid=${member.id}`)
    .setDescription(
      'hallo persoon welkom klik op de link om de laaste stappen door te nemen van de regestratie'
    )

    .setTimestamp()
  member.send({ embeds: [embed] })
}

module.exports.help = {
  name: 'welcome',
}
