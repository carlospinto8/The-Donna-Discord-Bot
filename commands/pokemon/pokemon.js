const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 20,
  data: new SlashCommandBuilder()
    .setName("pokemon")
    .setDescription("This command lets you possibly catch a pokemon!"),
  async execute(interaction) {
    await interaction.reply(
      "Oop.. This command is blocked by a sleeping pokemon. Come back later.",
    );
  },
};
