module.exports = {
    name: "say",
    description: "Make the bot say something",
    execute(bot, msg, args){
        const sayMessage = args.splice(0).join(" ");
            // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
            msg.delete().catch(filler=>{}); 
            // And we get the bot to say the thing: 
            msg.channel.send(sayMessage);
              
        
    } 
    
        

} 
