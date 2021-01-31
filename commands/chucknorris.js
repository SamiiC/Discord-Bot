const fetch = require('node-fetch');

module.exports = {
    name: "chuck",
    description: "Random Chuck Norris Quote",
    execute(bot, msg, args){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(body => {
                console.log(body);
                msg.reply(body.value);
            });
        
    },
    
        

} 
