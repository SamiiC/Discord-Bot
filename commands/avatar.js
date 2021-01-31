module.exports = {
    name: "avatar",
    description: "show a persons avatar",
    execute(bot, msg, args) {
        msg.reply(msg.author.displayAvatarURL());
    },
} 
