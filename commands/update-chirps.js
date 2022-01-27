const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('update-chirps')
		.setDescription('Update the chirps after a PR'),
	async execute(interaction) {	
		await interaction.reply("Bot updating, please wait for 15 seconds before next command");
		await process.exit();
	},
};
