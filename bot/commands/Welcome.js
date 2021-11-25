const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const row = new Discord.MessageActionRow()
			.addComponents(
        new Discord.MessageButton()
        .setCustomId('primary')
        .setLabel('yes i have verified')
        .setStyle('PRIMARY'),
			);
      // await Discord.interaction.reply({ content: 'Pong!', components: [row] });


  const embed = new Discord.MessageEmbed()
    .setColor(0x3498db)
    .setTitle('ples click if you verified')
    .setDescription(
      'please verify/confirm your email addres so ensure you are a student'
    )

    .setTimestamp()
  message.channel.send({ephemeral: true, embeds: [embed],components: [row] })
}

module.exports.help = {
  name: 'welcome',
}
