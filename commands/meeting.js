const errors = require("../utils/errors.js");
const { GetChannelId } = require("../utils/index.js");
/**
 * @author cvanh
 * @param {*} bot
 * @param {*} message
 * @param {*} args
 */
module.exports.run = async (bot, message, args) => {
  console.log(message.guildid)
  const Subcommand = message.content.substring(9);
  console.log("the subcommand is: " + Subcommand);

  switch (Subcommand) {
    case "create": // this is for .meeting create
      // console.log(message);      
    //   const t = message.guild.channels.cache.get(message.channelId)
    // console.log(t.guild.channels.channels);
      message.guild.channels.fetch().then((channels) => {
        channels.forEach((element) => {
          // loops trough the voice channels
          // find a voice channel
          if(element.type === "GUILD_VOICE"){
            const data = bot.channels.get(element.id)
            console.log(data)



            // console.log(element)

          //   // is the channel a empty voice channel?
          // if (data.members.size === 0) {
          //   console.log(`channel empty with id: ${element.id}`);
            
          // } else {
          //   console.log(`channel /w person: ${element.id}`)
          // }
        }
        });
      });
      break;

    case "presentie": // this is for .meeting remove.
      break;
    default:
      // no valid command found
      bot.messageCreate("not a valid input");
  }
};

module.exports.help = {
  name: "meeting",
};
