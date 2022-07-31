const config = require("../../config.json"), 
    Discord = require("discord.js"), clear = require("clear-module"), fs = require("fs")

exports.default = function(client, message, args=null) {
    let embed = new Discord.MessageEmbed({
        color: 0xff61ab,
        author: {
            name: "the bell of awakening",
            icon_url: "https://cdn.discordapp.com/attachments/783449684311670814/858421393968070676/rdclf.png"
        },
        description: "sends radcliffe dumpy daily - cooked and seasoned by tail panda",
        footer: { text: "requested by "+message.author.tag }
    })
    embed.addField("commands:", "\u200b")
    fs.readdirSync("./scripts/commands", options={encoding: "utf-8"}).forEach(e => {
        // let path = "./scripts/commands/"+e
        let path = "./"+e
        clear(path)
        let script = require(path)
        if(script.pandacommand) return;
        embed.addField(e.replace(".js", ''), (script.description) ? script.description : "what does it do???", true)
    })
    message.channel.send({embeds: [embed]})
}
exports.description = "is helpful :grinning:"