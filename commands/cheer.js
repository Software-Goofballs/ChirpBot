const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cheer')
		.setDescription('Cheers at people')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('Cheer Command')
				.setRequired(true)
				.addChoice('Yes', 'yes yes yes yes yyyeeEEEESSSS!')
				.addChoice('Fuck', 'aww fuck aww fuck')
		),
	async execute(interaction) {		
		return interaction.reply(interaction.options.getString('command'));
	},
};
