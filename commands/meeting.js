const errors = require("../utils/errors.js");
const { GetChannelId } = require("../utils/index.js");
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
  console.log("the subcommand is: " + Subcommand);

  switch (Subcommand) {
    case "create": // this is for .meeting create 
      message.guild.channels.fetch().then((channels) => {

        channels.forEach(element => { // loops trough the voice channels 

          // find a empty voice channel
          if(element.type === "GUILD_VOICE" &&
          element.members.size === 0
          ){
            console.log(element.id);
            console.log(message.voice)
            }
        });
        
      });
      // message.guild.createChannel(name, 'text')
      break;
    case "presentie": // this is for .meeting remove
      break;
    default: // no valid command found
      bot.messageCreate("not a valid input");
  }
};

module.exports.help = {
  name: "meeting",
};
