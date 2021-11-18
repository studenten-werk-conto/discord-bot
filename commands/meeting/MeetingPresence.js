const { db_insert, db_update, db_updateset,db_updateuser } = require("../../utils/database");

function MeetingPresence(bot, message, args){
    message.guild.channels.fetch().then((channels) => {
        channels.forEach((i) => { // loop trough all the channels of a 
            if(i.type === "GUILD_VOICE"){ // only voice channels
            console.log(i.members)
            i.members.map((k)=>{
                db_updateuser('presence',{"user_id":k.user.id},{
                    "user_id": k.user.id,
                    "user_username": k.user.username,
                    "presence": {
                        "initialised_by_id": message.author.id,
                        "initialised_by_username": message.author.username,
                        "time": new Date(),
                        "channel_name": i.name
                    }
                })
            })
        }
        })
      });
}
module.exports = MeetingPresence;