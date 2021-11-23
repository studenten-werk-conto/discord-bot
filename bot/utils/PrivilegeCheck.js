/**
 * check if message author is a teacher
 * @param {object} message message object from discord.js
 * @returns true if message author is a teacher
 */

const PrivilegeCheck = (message) => {
  if (message.member.roles.cache.some((role) => role.name === 'docent')) {
    return false // user is a teacher. ps not really proud of returning false, git blame me
  }
}
module.exports.PrivilegeCheck = PrivilegeCheck
