const { db_findone } = require("../../../utils/database");

async function MeetinggetData(args){
    const UserId = args[1].substring(3, args[1].length-1);
    // console.log(UserId)
    const data = await db_findone('presence',{"user_id":UserId})
    // console.log(data)
    return {
        "username":data.user_id,
        "presence": `teacher: ${data.presence[0].recorded_by_username} channel: ${data.presence[0].channel_name } time: ${data.presence[0].time }`
    }
}

module.exports = MeetinggetData
