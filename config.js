const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  giphyKey: process.env.GIPHY_API_KEY,
};
