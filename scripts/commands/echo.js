const config = require("../../config.json")
const Discord = require("discord.js")

exports.default = function(client, message, args=null) {
    message.channel.send(message.content.replace(config.prefix+"echo ", ''))
}
exports.pandacommand = true
exports.description = "echoes for testing"