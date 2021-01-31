const { MessageAttachment } = require('discord.js');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "widehardo",
    description: "Show WIDEHARDO",
    execute(bot, msg, args){
        const widehardo = new MessageAttachment('https://cdn.discordapp.com/attachments/680798036238270471/711561836025086014/image0.png');
            msg.channel.send(widehardo);
        
    } 
    
        

} 
