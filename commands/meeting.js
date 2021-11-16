const errors = require("../utils/errors.js");
/**
 * @author cvanh
 * @param {*} bot
 * @param {*} message
 * @param {*} args
 */
module.exports.run = async (bot, message, args) => {
  //   if (args[0] === "help") return message.channel.send(".say <word>");
  //   message.delete();
  //     if (args.length <= 0) {
  //       message.channel.send("what do you want me to say?");
  //     } else {
  //     let botmessage = args.join(" ");
  //     message.channel.send(botmessage);
  //     }
  const Subcommand = message.content.substring(9);
  console.log(Subcommand);

  switch (Subcommand) {
    case "create":
        const name = "naam"
        message.guild.createChannel(name, 'text')
      break;
    case "remove":
      break;
    default:
      bot.messageCreate("please enter a valid input");
  }
};

module.exports.help = {
  name: "meeting",
};
