const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({
  fetchAllMembers: false,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
      
client.slashcommands = new Discord.Collection();
client.normalcommands = new Discord.Collection();
client.normalaliases = new Discord.Collection();
["command", "events", "slash"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
}); 

client.login(config.token);
