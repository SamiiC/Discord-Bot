module.exports = {
    name: "unban",
    description: "Unban people Using their id",
    execute(bot, msg, args){
        const userID = args[0]
                if (msg.member.hasPermission("BAN_MEMBERS")) {
                    if (!userID) return msg.reply("Please provide a User ID to unban.")
                    let reason = args.slice(2).join(" ");
                    
                    
                        msg.guild.members.unban(userID , reason || "No reason provided." )
                        .then(() => {
                            msg.reply(`:white_check_mark: Unbanned ` + '<@' + userID + '>');
                    
                        })
                        .catch(err => {
                        
                            msg.reply(`:x: Unable to ban member, perhaps they are in the server?`);
                            console.error(err);
                        });
                        
                    
                } else {
                    msg.channel.send(`You don't have permission to do that!`)
                } 
        
    } 
    
        

} 
