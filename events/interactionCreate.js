const Discord = require("discord.js");

module.exports.run = async(client, interaction) => {
if(!interaction.inGuild()) { return; }
if(interaction.isCommand()) {
  const intslashcmd = client.slashcommands.get(interaction.commandName)
  if (!intslashcmd) { return; }
  try {
		await client.slashcommands.get(interaction.commandName).run(client, interaction);
	} catch (error) {
		console.error(error);
        const riperr = new Discord.MessageEmbed()
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#FF0000")
        .setDescription(`**An Error has Occured, Please try again!**`)
		await interaction.reply({ embeds: [riperr], ephemeral: true });
	}
}
