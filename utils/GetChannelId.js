function getChannelIDs(fetch) {
  var array = [];
  let channels = client.guilds.channels;
  for (const channel of channels.values()) {
    array.push(channel.id);
    console.log(channel.id);
  }

  return array;
}

module.exports = getChannelIDs;
