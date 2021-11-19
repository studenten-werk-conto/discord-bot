const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if (args[0] === "help") return message.channel.send(".say <word>");
  message.delete();
    if (args.length <= 0) {
      message.channel.send({content:"what do you want me to say?"});
    } else {
    let botmessage = args.join(" ");
    message.channel.send({content:botmessage});
    }
  
};

module.exports.help = {
  name: "say",
};