const { SlashCommandBuilder } = require('@discordjs/builders');

const cheers = [
	"yes yes yes yes yyyeeEEEESSSS!"
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cheer')
		.setDescription('Cheers at people')
		.addStringOption(option =>
				option
					.setName('command')
					.setRequired(true)
					.addChoice('Yes', 'yes yes yes yes yyyeeEEEESSSS!')
					.addChoice('Fuck', 'aww fuck aww fuck')
				),
	async execute(interaction) {
		let randoCheer;
		randoCheer = cheers[Math.floor(Math.random() * cheers.length)];
		randoCheer = randoCheer.replace(/USER/g, interaction.user.id);
		
		return interaction.reply(randoCheer);
	},
};
