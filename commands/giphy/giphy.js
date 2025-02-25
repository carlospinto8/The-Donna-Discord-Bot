const { SlashCommandBuilder } = require("discord.js");
const { giphyKey } = require("../../config.js");
const { GiphyFetch } = require("@giphy/js-fetch-api");

module.exports = {
  cooldown: 20,
  data: new SlashCommandBuilder()
    .setName("giphy")
    .setDescription("Request a GIF from giphy")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The the term to perform a search with giphy")
        .setRequired(true),
    ),
  async execute(interaction) {
    const gf = new GiphyFetch(giphyKey);
    const query = interaction.options.getString("input") ?? "cat meme";

    const { data } = await gf.search(query, { limit: 1 });

    try {
      await interaction.reply(data[0].images.fixed_height.url);
    } catch (err) {
      console.log(error);
    }
  },
};
