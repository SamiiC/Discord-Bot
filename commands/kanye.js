const fetch = require('node-fetch');

module.exports = {
    name: "kanye",
    description: "Get kanye to say something",
    execute(bot, msg, args){
        fetch('https://api.kanye.rest/')
            .then(res => res.json())
            .then (body =>{
                msg.reply(body.quote);
            });
        
    } 
} 
