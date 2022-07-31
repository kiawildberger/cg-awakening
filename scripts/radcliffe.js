const config = require("../config.json")
const Discord = require("discord.js")

exports.default = function (client, message, args=null) {
    let channel = client.channels.cache.get(config.channelids.general)
    channel.send({content:config.data.message, files: [config.data.image]})
}
