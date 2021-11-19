const errors = require("../utils/errors.js");
const { GetChannelId } = require("../utils/index.js");
const botconfig = require("../botconfig.json");
const MeetingCreate = require("./meeting/MeetingCreate.js");
const MeetingPresence = require("./meeting/MeetingPresence.js");
const MeetingGet = require("./meeting/meetingGet.js");

/**
 * @author cvanh
 * @param {*} bot
 * @param {*} message
 * @param {*} args
 */
module.exports.run = async (bot, message, args) => {// extract the parameter/subcommand of .meeting
  switch (args[0]) { // selects the second parameter example .meeting get @user get is the parameter of meeting
    case "create": // this is for .meeting create
      MeetingCreate(bot, message, args);
      break;

    case "presence": // this is for .meeting remove.
      MeetingPresence(bot, message, args);
      break;
    case "get":
      MeetingGet(bot, message, args);
      break;
    default:
      // no valid command found
      // bot.messageCreate("not a valid input");
      errors.noParameter(message.channel);
    }
};

module.exports.help = {
  name: "meeting",
};
