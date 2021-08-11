const config = require("../config.json");

module.exports.run = (client) => {
  console.log(`Logged in with ID ${client.user.tag}!`)
  console.log(`Serving ${client.users.cache.size} Users in ${client.guilds.cache.size} Servers!`)
  client.user.setActivity(`${config.prefix}help | Developed by ${config.owner}`, { type: "PLAYING" });
}
