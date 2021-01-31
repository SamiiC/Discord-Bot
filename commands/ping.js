module.exports = {
    name: "ping",
    description: "Ping command",
    async execute(bot, msg, args){
        const m = await msg.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms.`);
    } 
} 
