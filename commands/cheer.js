const { SlashCommandBuilder } = require('@discordjs/builders');

const cheers = [
	"yes yes yes yes YYYEEEEESSSSS!"
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cheer')
		.setDescription('Cheers at people'),
	async execute(interaction) {
		let randoCheer;
		randoCheer = cheers[Math.floor(Math.random() * cheers.length)];
		randoCheer = randoCheer.replace(/USER/g, interaction.user.id);
		
		return interaction.reply(randoCheer);
	},
};
