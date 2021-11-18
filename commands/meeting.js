const errors = require("../utils/errors.js");
const { GetChannelId } = require("../utils/index.js");
const botconfig = require("../botconfig.json");
const MeetingCreate = require("./meeting/MeetingCreate.js");
const MeetingPresence = require("./meeting/MeetingPresence.js");

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
      MeetingCreate(bot, message, args);
      break;

    case "presence": // this is for .meeting remove.
      MeetingPresence(bot, message, args);
      break;
    default:
      // no valid command found
      bot.messageCreate("not a valid input");
  }
};

module.exports.help = {
  name: "meeting",
};
