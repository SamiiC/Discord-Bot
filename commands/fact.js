const fetch = require('node-fetch');

module.exports = {
    name: "fact",
    description: "Produces a random fact",
    async execute(bot, msg, args) {
        const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        const result = res.json()
        msg.reply(result.text)
    },
}