const https = require("https");
const { SlashCommandBuilder } = require("discord.js");

function randomNumber() {
  return Math.floor(Math.random() * (1025 - 1 + 1)) + 1;
}

module.exports = {
  cooldown: 20,
  data: new SlashCommandBuilder()
    .setName("pokemon")
    .setDescription("This command lets you possibly catch a pokemon!"),
  async execute(interaction) {
    const randomPokemonId = randomNumber();

    https
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", async () => {
          let caughtPokemon = JSON.parse(data);
          console.log(caughtPokemon.name);
          await interaction.reply(
            `You threw a pokeball into the tall grass. Congratulations, you just caught ${caughtPokemon.name}!!`,
          );
        });
      })
      .on("error", async (err) => {
        console.log("Error: " + err.message);
        await interaction.reply(
          "Oop.. This command is blocked by a sleeping pokemon. Come back later.",
        );
      });
  },
};
