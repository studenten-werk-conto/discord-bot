const Discord = require("discord.js");
require("dotenv").config();
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { promisify } = require('util');
const readdir = promisify(require('fs').readdir);

bot.on("ready", async () => {
  //await train_bot();
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers`
  );
  bot.user.setActivity("with some code", {
    type: "PLAYING",
  });
});

client.commands = new Map();

client.on('ready', async () => {
  readdir('./commands/', (error, files) => {
    if (error) throw error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return; // make sure the file is what you are looking for
      try {
        const properties = require(`./commands/${file}`);
        client.commands.set(properties.help.name, properties);
      } catch (err) {
        throw err;
      }  
    });
  }
});

//login
bot.login(process.env.token);
