const config = require("../../config.json")
const Discord = require("discord.js")

exports.default = function(client, message, args=null) {
    const j = Math.floor(Math.random()*100);
    if(j === 69) {
        message.channel.send(message.author.toString())
        setTimeout(() => message.channel.send("lmao"), 2500)
    } else {
        const emojis = client.emojis.cache.map(e => e.id)
        const emoji = client.emojis.cache.find(e => e.id === emojis[Math.floor(Math.random()*emojis.length)])
        message.channel.send(`pong! ${emoji || ":smile:"}`)
    }
}
exports.description = "ping:bangbang:"