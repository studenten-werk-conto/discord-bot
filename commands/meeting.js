const errors = require("../utils/errors.js");
const { GetChannelId } = require("../utils/index.js");
const botconfig = require("../botconfig.json");

/**
 * @author cvanh
 * @param {*} bot
 * @param {*} message
 * @param {*} args
 */
module.exports.run = async (bot, message, args) => {
  const Subcommand = message.content.substring(9); // extract the parameter/subcommand of .meeting
  console.log("the subcommand is: " + Subcommand);

  switch (Subcommand) {
    case "create": // this is for .meeting create
      message.guild.channels.fetch().then((channels) => {
        channels.forEach((element) => {
          console.log(element)
            if (
              element.members.size === 0 && // are there users in the channel
              element.type === "GUILD_VOICE" &&  // is it a voice channel?
              element.id != "910227270776541234" // prevent user from joining waiting channel
               ) {
              console.log(`channel empty with id: ${element.id}`); 
              message.member.voice.setChannel(element.id) // moves the message author to a voice channel
            }
          
        });
      });
      break;

    case "presentie": // this is for .meeting remove.
    console.log(message.member.roles)
      break;
    default:
      // no valid command found
      bot.messageCreate("not a valid input");
  }
};

module.exports.help = {
  name: "meeting",
};
