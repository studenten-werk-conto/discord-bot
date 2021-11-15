const Discord = require("discord.js");
require("dotenv").config();
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

bot.on("ready", async () => {
  //await train_bot();
  console.log(
    `${bot.user.username} is online on ${bot.guilds.cache.size} servers`
  );
  bot.user.setActivity("with some code", {
    type: "PLAYING",
  });
});

bot.on('message', msg => { // Message function
  if (msg.author.bot) return; // Ignore all bots
  // if (msg.content.startsWith(settings.prefix)) return; // It always has to starts with the prefix which is '!'

  if (msg.content.startsWith("ping")) { // When a player does '!ping'
    msg.reply("Pong!") // The bot will say @Author, Pong!
  }
});

//login
bot.login(process.env.token);
