const config = require("../../config.json"), Discord = require("discord.js"), fs = require('fs')

let replies = ['the awakened master says: "$$"', 'the awakened master has replied. they said "$$"', "congratulations! your suggestion has been read and replied to. the reply is as follows.\n\n$$"]

exports.default = function(client, message, args=null) { // do i even use args lmao
    let target_id = message.content.replace('!sclear ', '').split(' ')[0] // hopefully?
    let suggestions = JSON.parse(fs.readFileSync("./suggestions.json", {encoding: 'utf-8', flag:'r'}))
    let sobj = suggestions[target_id] // i really hope this works
    message.channel.send("message #"+target_id+" removed")
    delete suggestions[target_id]
    fs.writeFileSync("./suggestions.json", JSON.stringify(suggestions))
}
exports.pandacommand = true;
exports.description = "removes suggestion without replying to it"