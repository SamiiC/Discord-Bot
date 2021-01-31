module.exports = {
    name: "ban",
    description: "Ban people xd",
    execute(bot, msg, args){
        const user = msg.mentions.users.first();
                if (msg.member.hasPermission("BAN_MEMBERS")){
                
                    if (user) {
                    const member = msg.guild.member(user);
                
                
                    if (member) {
                        
                        member
                        .ban({ reason: args.slice(1).join(' ')})

                        .then(() => {
                            msg.channel.send(`:white_check_mark: Banned** ${user.tag} **`)
                        })
                        .catch(err => {
                        
                            msg.reply('I was unable to ban the member');
                            console.error(err);
                        });
                    } else {
                        msg.reply("That user isn't in this server!");
                    }
                } else {
                        msg.reply("You didn't mention the user to ban!");
                    }
            } else {
                msg.reply("You are significant enough to ban")
                }
        
    },
    
        

} 
