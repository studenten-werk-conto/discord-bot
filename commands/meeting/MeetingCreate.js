function MeetingCreate(bot, message, args){
    message.guild.channels.fetch().then((channels) => {
        channels.forEach((element) => {
          console.log(element)
            if (
              element.members.size === 0 && // are there users in the channel
              element.type === "GUILD_VOICE" &&  // is it a voice channel?
              element.id != botconfig.VC_wait_channel // prevent user from joining waiting channel
               ) {
              console.log(`channel empty with id: ${element.id}`); 
              message.member.voice.setChannel(element.id) // moves the message author to a voice channel
            }
          
        });
      });
}
module.exports = MeetingCreate;