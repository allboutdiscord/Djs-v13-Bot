const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Displays the Ping of the Bot",
  run: async(client, interaction) => {
const pong = new Discord.MessageEmbed()
.setDescription(`**Running Commands at Ping of ${client.ws.ping}ms!**`)
.setColor("#00FFFF")
.setTimestamp()
.setFooter(client.user.tag, client.user.displayAvatarURL())
    await interaction.reply({ embeds: [pong] }).then(m => setTimeout(() => interaction.deleteReply(), 5000));
  }}
