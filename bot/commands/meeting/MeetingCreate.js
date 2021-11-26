const botconfig = require('../../botconfig.json')
const { PrivilegeCheck } = require('../../utils')
const errors = require('../../utils/errors')

function MeetingCreate(bot, message, args) {
  if (PrivilegeCheck(message))
    return errors.noPerms(message, 'you need to be a teacher')

  message.guild.channels.fetch().then((channels) => {
    channels.forEach((element) => {
      if (
        element.members.size === 0 && // are there users in the channel
        element.type === 'GUILD_VOICE' && // is it a voice channel?
        element.id != botconfig.VC_wait_channel // prevent user from joining waiting channel
      ) {
        // console.log(`channel empty with id: ${element.id}`);
        message.member.voice.setChannel(element.id) // moves the message author to a voice channel
      }
    })
  })
}
module.exports = MeetingCreate
