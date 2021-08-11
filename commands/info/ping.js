const Discord = require("discord.js");

module.exports = {
name: "ping",
cooldown: 5000,
botPermission: ["EMBED_LINKS", "SEND_MESSAGES"],
run: async(client, message, args) => {
const pogx2 = new Discord.MessageEmbed()
.setColor("#00FFFF")
.setTimestamp()
.setFooter(client.user.tag, client.user.displayAvatarURL())
.setDescription(`Getting the Ping from the Host...`)
let msg = await message.channel.send({ embeds: [pogx2] });
let ping1 = msg.createdTimestamp - message.createdTimestamp;
let ping2 = client.ws.ping;
let pog = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setDescription(`Message Latency: \`${ping1}ms\`\nWebsocket Ping: \`${ping2}ms\``)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
msg.delete()
message.channel.send({ embeds: [pog]}).then(m => setTimeout(() => m.delete(), 15000))
}}
