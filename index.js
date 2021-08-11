const Discord = require("discord.js");
const config = require("./config.json");
const { Intents } = require("discord.js");
const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});
      
client.slashcommands = new Discord.Collection();
client.normalcommands = new Discord.Collection();
client.normalaliases = new Discord.Collection();
["command", "events", "slash"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
}); 

client.login(config.token);
