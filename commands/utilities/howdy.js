const { SlashCommandBuilder } = require('discord.js');

/*
    NOTES:
    1. New SlashCommands must have AT LEAST a name and a description 
    2. Must be between 1-32 chars and cannot use capitals, spaces, or symbols (except - or _)
    3. Needs a function to execute when the command is called

*/

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howdy')
		.setDescription('Replies with Howdy!'),
	async execute(interaction) {
		await interaction.reply('Howdy!');
	},
};