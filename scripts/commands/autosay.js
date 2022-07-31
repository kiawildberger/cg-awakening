const config = require("../../config.json"), Discord = require("discord.js")

// for now this only says shit in general
// because im too lazy to work on vassalize so it works on crostini
// either ill expand this or ill forget about this lmao

exports.default = function(client, message, args=null) {
    if(message.author.id === config.uids.panda) {
        client.channels.cache.get(config.channelids.general).send(message.toString().replace(config.prefix+"autosay ", '')).then(() => {
            message.channel.send("sent successfully")
        }).catch(() => {
            message.channel.send("ion think that worked")
        })
    }
}
exports.pandacommand = true;
exports.description = "this is epic"