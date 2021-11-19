function UserFormatForDB(){
    const format = {
        user_id: k.user.id, // user id of student
        user_username: k.user.username, // username of student at time of first presence poll
    presence: {
      recorded_by: message.author.id, // teachers discord id
      recorded_by_username: message.author.username,
      time: new Date(), // time of presence poll
      channel_name: i.name, // name of the voice channel
    }
    }
    
    return (format)
}

module.exports = UserFormatForDB;