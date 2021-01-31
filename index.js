
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const bot = new Discord.Client();
const fetch = require('node-fetch');
const { MessageAttachment } = require('discord.js');
const { MessageEmbed } = require('discord.js');


const prefix = '!';
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


//  allows bot to start reacting to info
bot.on('ready', () => {
    console.log("On");
    bot.user.setActivity(`yo`);
})

// Create an event listener for messages
bot.on('message', async msg => {

    if(msg.author.bot) return;
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;
    
    let args = msg.content.substring(prefix.length).split(' ');
    const cmd = args.shift().toLowerCase()

    try{
        bot.commands.get(cmd).execute(bot, msg, args)

    }catch(e){
        msg.reply(`there was an error`)
        console.log(e)
    }

})

bot.login(process.env.Token);