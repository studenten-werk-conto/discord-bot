/**
 * @title user format for the db
 * @description makes shure there are no fuck ups with data formats
 *
 * @author cvanh
 * @param {object} k the loop
 * @param {object} message the message object from discord js
 * @param {object} UserData data of said user
 * @returns proper formated user for db
 */

function UserFormatForDB(k, message, UserData) {
  const format = {
    user_id: k.user.id, // user id of student
    user_username: k.user.username, // username of student at time of first presence poll
    presence: {
      recorded_by: message.author.id, // teachers discord id
      recorded_by_username: message.author.username,
      time: new Date(), // time of presence poll
      channel_name: i.name, // name of the voice channel
    },
    user_data: {
      email: UserData.email,
    },
  };

  return format;
}

module.exports = UserFormatForDB;
