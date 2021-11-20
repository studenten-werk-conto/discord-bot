/**
 * check if message author is a teacher
 * @param {object} message message object from discord.js
 * @returns true if message author is a teacher
 */

function PrivilegeCheck(message){
    if (message.member.roles.cache.some(role => role.name === 'docent')) {
        return true
    }
}
module.exports = PrivilegeCheck;