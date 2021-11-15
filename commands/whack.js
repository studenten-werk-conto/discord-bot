module.exports.run = async (client, message, args) => {
  // ... command logic
  message.channel.send("Hello!");
};

module.exports.help = {
  name: "foo",
};
