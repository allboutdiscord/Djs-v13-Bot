const Discord = require("discord.js");
const { Intents } = require("discord.js");
const client = 
      
const normalcommands = new Discord.Collection();
const slashcommands = new Discord.Collection();
const config = require("./config.json");

client.login(config.token);
