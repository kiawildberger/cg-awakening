const config = require("../../config.json"), Discord = require("discord.js"), fs = require('fs')

let replies = ['the awakened master says: "$$"', 'the awakened master has replied. they said "$$"', "congratulations! your suggestion has been read and replied to. the reply is as follows.\n\n$$"]

exports.default = function(client, message, args=null) { // do i even use args lmao
    let target_id = message.content.replace('!sreply ', '').split(' ')[0] // hopefully?
    let m_reply = message.content.split(' ').slice(2) // i really dont understand slice. i mean i do but its stupid
    m_reply = replies[Math.floor(Math.random()*replies.length)].replace("$$", (m_reply.join(' ') || "yes"))
    let suggestions = JSON.parse(fs.readFileSync("./suggestions.json", {encoding: 'utf-8', flag:'r'}))
    let sobj = suggestions[target_id] // i really hope this works
    client.channels.cache.get(config.channelids.general).send({ content: m_reply, reply: { messageReference: sobj.mid }}).then(() => {
        message.channel.send("replied!")
    }).catch(() => {
        message.channel.send("epic fail:interrobang:")
    })
    // i hate discordjs 13
    delete suggestions[target_id]
    fs.writeFileSync("./suggestions.json", JSON.stringify(suggestions))
}
exports.pandacommand = true;
exports.description = "replies to suggestion lmao nobody will ever see this"