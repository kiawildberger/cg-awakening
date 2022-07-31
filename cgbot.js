const Discord = require("discord.js");
const fs = require("fs");
const clearmodule = require("clear-module")
const axios = require('axios')
clearmodule("./config.json")
let config = require("./config.json");
// let client = new Discord.Client({intents: ["DIRECT_MESSAGES", "GUILDS"]});
let client = new Discord.Client({intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILDS], partials: ["CHANNEL"]})
function loadExec(path, msg = false, args = false) { clearmodule(path); require(path).default(client, msg, args) }
let sendradcliffe = true;

client.on("ready", () => {
    console.log("ready")
    setInterval(async () => {
        let hours = new Date().getHours(), minutes = new Date().getMinutes(), day = new Date().getDay(), date = new Date().getDate()
        if (minutes === 0 && hours === 12 && sendradcliffe === true) { // daniel radcliffe of the day
            loadExec("./scripts/radcliffe.js")
        }
        let rh = 24-(hours-12)
        rh = (rh>24) ? rh-24 : rh
        client.user.setActivity("bell tolls again in "+rh+"h")
    }, 60000)
})

client.on("messageCreate", async (message) => { // generally dont touch this
    // if (message.author.bot) return; // lmao i can run my own commands now
    if(message.guild === null) { // is dm, make from city girl or panda
        clearmodule("./config.json")
        if(message.author.id === config.uids.cg || message.author.id === config.uids.panda) {
            if(message.content === "stop") {
                sendradcliffe = false;
                message.channel.send("i will temporarily stop sending radcliffe pics in chat")
                client.user.setActivity("not sending daniel radcliffe pics in chat")
            } else if(message.content === "start") {
                sendradcliffe = true;
                message.channel.send("i will start sending radcliffe pics again")
                client.user.setActivity("sending radcliffe, hourly")
            }
        }
    }
    clearmodule("./config.json")
    if (message.content[0] === config.prefix) { // here we have ourselves a command boyes
        let command = message.content.replace(config.prefix, '').split(' ')[0]
        clearmodule(`./scripts/commands/${command}.js`)
        if(require(`./scripts/commands/${command}.js`).pandacommand && message.author.id != config.uids.panda) return; // new pandacommand check. previously i was doing it in the command itself which is stupid
        let args = message.content.split(" ")
        args.splice(0, 1)
        if (fs.existsSync(`./scripts/commands/${command}.js`)) {
            try { loadExec(`./scripts/commands/${command}.js`, message, args); } catch(err) { throw err }
        }
    }
})

client.login(config.token)

/*
i could do the community playlist again that could be cool
but like not youtube api cos that sucks
*/