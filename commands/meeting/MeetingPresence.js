const {
  db_updateuser,
} = require("../../utils/database");

function MeetingPresence(bot, message, args) {
  message.guild.channels.fetch().then((channels) => {
    channels.forEach((i) => {
      // loop trough all the channels of a
      if (i.type === "GUILD_VOICE") {
        // only voice channels
        i.members.map((k) => {
          // loop trough all the members in a voice channel
          db_updateuser("presence",
            { user_id: k.user.id }, // search in db for user with their discord id
            {
              user_id: k.user.id, // user id of student
              user_username: k.user.username, // username of student at time of first presence poll
              presence: {
                recorded_by: message.author.id, // teachers discord id
                time: new Date(), // time of presence poll
                channel_name: i.name, // name of the voice channel
              },
            }
          );
        });
      }
    });
  });
}
module.exports = MeetingPresence;
