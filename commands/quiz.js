const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "quiz",
    description: "Do a naruto charecter quiz",
    execute(bot, msg, args){
        const quiz = require('./quiz.json');
            const item = quiz[Math.floor(Math.random() * quiz.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            const quizembed = new MessageEmbed()
                .setTitle(item.question)
                .setDescription('You have 30 seconds to answer')
                .setColor('#8f2099')
                .setImage(item.image)

            msg.channel.send(quizembed).then(() => {
                msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                        msg.channel.send(`${collected.first().author} got the correct answer!`);
                        
                    })
                    .catch(() => {
                        msg.channel.send('Looks like nobody got the answer this time. The answer was ' + item.answers);
                    });
            });
    } 
    
        

} 
