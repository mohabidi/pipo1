const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("499187632404955146")
setInterval(function() {
channel.send(`ALLboooti`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
