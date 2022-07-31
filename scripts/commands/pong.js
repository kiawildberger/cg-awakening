const config = require("../../config.json")
const Discord = require("discord.js")

exports.default = function(client, message, args=null) {
    const emojis = client.emojis.cache.map(e => e.id)
    const emoji = client.emojis.cache.find(e => e.id === "889896115292491787")
    message.channel.send(`ping! ${emoji || ":imp:"}`)
}
exports.description = "pong:bangbang:"