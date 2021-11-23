const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_VOICE_STATES',
    'DIRECT_MESSAGES',
    'GUILD_MEMBERS',
  ],
})
const { promisify } = require('util')
const readdir = promisify(require('fs').readdir)
const fs = require('fs')
const botconfig = require('./botconfig.json')
const Welcome = require('./commands/Welcome')
const { db_insert } = require('./utils/database')
const { randomUUID } = require('crypto')
let prefix = botconfig.prefix
bot.commands = new Discord.Collection()

bot.on('ready', async () => {
  //await train_bot();
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers`
  )
  bot.user.setActivity('altijdgeslaagd.nl kanker kind', {
    type: 'PLAYING',
  })
})

fs.readdir('./commands', (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter((f) => f.split('.').pop() === 'js')
  if (jsfile.length <= 0) {
    console.log('No commands')
    return
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props)
  })
})

bot.on('messageCreate', async (message) => {
  let messageArray = message.content.split(' ')
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if (commandfile) commandfile.run(bot, message, args)
})

bot.on('guildMemberAdd', async (member) => {
  // TODO make this a seprate file

  const uuid = randomUUID()

  db_insert('presence', {
    user_id: member.id,
    tracking_code: uuid,
  })

  console.log('a')
  const embed = new Discord.MessageEmbed()
    .setColor(0x3498db)
    .setTitle('hi welocme')
    .setURL(`http://www.localhost:8080/tracking?trackid=${uuid}`)
    .setDescription('data.presence')

    .setTimestamp()
  member.send({ embeds: [embed] })
})

//login
bot.login(process.env.token)