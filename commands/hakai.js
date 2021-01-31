module.exports = {
    name: "hakai",
    description: "Purge the sins of chat",
    async execute(bot, msg, args){
        const purgeNumber = parseInt(args[0],10)
               
                if(!purgeNumber || purgeNumber < 2 || purgeNumber > 100) 
                    return msg.reply(':x: Enter a number between **2** and **100** to *** H A K A I ***')

                const fetched = await msg.channel.messages.fetch({limit: purgeNumber});
                msg.channel.bulkDelete(fetched)

                .then(() => {
                    msg.channel.send(`破壊 Sucessfully deleted** ${purgeNumber} Messages ** \n https://imgur.com/J9bpgRP.gif`)
                    .then(msg => {
                        msg.delete({timeout: 16800}).catch(O_o=>{});
                    })
                    .catch(console.error);
                })
                .catch(err => {
                    msg.channel.send('There was an error')
                    console.log(err)
                });
        
    } 
    
        

} 
