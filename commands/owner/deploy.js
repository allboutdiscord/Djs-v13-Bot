const Discord = require("discord.js");

module.exports = {
name: "deploy",
ownerOnly: true, 
run: async(client, message, args) => {
const posted = new Discord.MessageEmbed()
.setColor("#00FF00")
.setTimestamp()
.setFooter(client.user.tag, client.user.displayAvatarURL())
.setDescription(`**Slash Commands have been Deployed!**`);
const notposted = new Discord.MessageEmbed()
.setColor("#FF0000")
.setTimestamp()
.setFooter(client.user.tag, client.user.displayAvatarURL())
.setDescription(`**Failed to Deploy Slash Commands!**`);
try {
client.slashcommands.forEach(x => {
const data = {
name: x.name,
description: x.description,
options: x.options,
};
client.application?.commands.create(data)
})
message.channel.send({ embeds: [posted] })
} catch(e) {
console.log(e)
message.channel.send({ embeds: [notposted] })
}
}}
