const config = require("../../config.json"), Discord = require("discord.js"), clearmodule = require("clear-module")
let fs = require('fs')

exports.default = function(client, message, args=null) {
    client.users.cache.get(config.uids.panda).createDM().then(channel => {
        let suggestions = JSON.parse(fs.readFileSync("./suggestions.json", {encoding: 'utf-8', flag:'r'})) // what does flag do here? isnt it r anyways cos its READfilesync???
        // let member = client.guilds.get(config.serverID).member(message.author);
        // let member = client.guilds.cache.get('739649764307763271').member(message.author);
        let member = message.author;
        // let id = Object.keys(suggestions).length // so i could do this, or i could increment the last one. ez
        let suggestion_id = (parseInt(Object.keys(suggestions)[Object.keys(suggestions).length-1]) || 0) + 1
        channel.send(`suggestion message from ${message.author.tag} [id ${suggestion_id}]: ${message.content.replace('!message ', '')}`)
        suggestions[suggestion_id] = {
            mid: message.id,
            sid: suggestion_id,
            content: message.content.replace("!message ", ''),
            author: {
                id: message.author.id,
                username: message.author.username
            },
            nick: member.displayName
        }
        fs.writeFileSync("./suggestions.json", JSON.stringify(suggestions))
        let ms = ["your message is on its way through the extensive bowels of my inner workings", "message received.", "the void has opened is ears to heed your message", "message delivered", "the awakened vacuum tubes have done their duty", "message received!", "message received. the awakened master will probably be back to you shortly", "the bellmaster hears your cries from atop their perch."]
        message.channel.send(ms[Math.floor(Math.random()*ms.length-1)])
    })
}

exports.pandacommand = false;
exports.description = "send a message to the mysterious awakened master"