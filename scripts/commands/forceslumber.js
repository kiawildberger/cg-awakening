const config = require("../../config.json"), Discord = require("discord.js")

exports.default = function(client, message, args=null) {
    if(message.author.id === config.uids.panda) {
        client.channels.cache.get(config.channelids.general)
            .send({content:"slumber", files: [config.data.slumberimage]})
        return;
    }
}
exports.pandacommand = true;
exports.description = "mystery emoji???"