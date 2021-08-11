const { ownerID, prefix } = require("../config.json");
const Discord = require("discord.js")
let cooldown = {};

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.members.fetch(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.normalcommands.get(cmd);
  if (!command) command = client.normalcommands.get(client.aliases.get(cmd));
  if (!command) return;
//=== OWNER RESTRICTED COMMANDS ===    
  if (command.ownerOnly) {
    if (message.author.id !== ownerID) {
      const ownerk = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setDescription("**This is an Owner Only Command!**")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      return message.channel.send({ embeds: [ownerk] }).then(m => setTimeout(() => m.delete(), 5000)); }
  }
//=== IF BOT HAS NO PERMISSIONS ===

//=== IF AUTHOR HAS NO PERMISSIONS
  
//=== COOLDOWN SYSTEM ===
  
//=== RUNNING THE COMMANDS ===
  if (command) command.run(client, message, args)
}
