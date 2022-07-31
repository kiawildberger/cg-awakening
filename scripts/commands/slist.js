const config = require("../../config.json"), Discord = require("discord.js"), fs = require('fs')

exports.default = function(client, message, args=null) { // do i even use args lmao
    let final = "", suggestions = JSON.parse(fs.readFileSync("./suggestions.json", {encoding: 'utf-8', flag:'r'}))
    for(e in suggestions) {
        e = suggestions[e]
        final += `\`${e.sid} (from ${e.author.username})\`: ${e.content}\n`
    }
    message.channel.send(final || "you're all caught up!")
}
exports.pandacommand = true;
exports.description = "replies to suggestion lmao nobody will ever see this"