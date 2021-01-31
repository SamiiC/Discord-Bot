module.exports = {
    name: "kick",
    description: "kick people lol",
    execute(bot, msg, args){
        const user = msg.mentions.users.first();
            const member = msg.guild.member(user);
            let kickreason = args.slice(1).join(" ");
                    if (user) {  
                        if (member) {
                            member
                                .kick(kickreason || 'No reason specified')
                                .then(() => {
                                    msg.reply(`Successfully kicked the member ** ${user.tag} **`)

                                })
                                .catch(err => {
                                    msg.reply('I CANT KICK THAT MEMBER LOL')
                                    console.error(err)
                                })

                    } else {
                        msg.reply('That user is not in this server  ')

                    }
                }
        
    } 
    
        

} 
