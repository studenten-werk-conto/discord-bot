const { PrivilegeCheck, errors } = require('../../utils')
const { db_updateuser } = require('../../utils/database')
const UserFormatForDB = require('../../utils/UserFormatForDB')

function MeetingPresence(bot, message, args) {
  if (PrivilegeCheck(message)) return errors.noPerms(message, 'you no teacher')

  message.guild.channels.fetch().then((channels) => {
    console.log(channels)
    channels.map((i) => {
      // loop trough all the channels of a
      if (i.type === 'GUILD_VOICE') {
        // only voice channels
        i.members.map((k) => {
          // loop trough all the members in a voice channel
          db_updateuser(
            'presence',
            { user_id: k.user.id }, // search in db for user with their discord id
            UserFormatForDB(k, message)
          )
        })
      }
    })
  })
}
module.exports = MeetingPresence
