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
  bot.user.setActivity("altijdgeslaagd.nl kanker kind", {
    type: "PLAYING",
  });
});

client.commands = new Map();

fs.readdir("./commands", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("No commands");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("message", async (message) => {
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

//login
bot.login(process.env.token);
