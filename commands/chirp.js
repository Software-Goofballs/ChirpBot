const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');
const memory = path.resolve(__dirname, "./../memory/data.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chirp')
		.setDescription('Chirps at people')
		.addUserOption(option => option.setName('target').setDescription('Who ya chirping at?')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		const chirpData = JSON.parse(fs.readFileSync(memory));
		let randoChirp;
		if (user == undefined) {
			randoChirp = chirpData.chirps[Math.floor(Math.random() * chirps.length)];
			randoChirp = randoChirp.replace(/USER/g, interaction.user.id);
		} else {
			if (user.tag == 'TheGuardianG13#7157') {
				randoChirp = chirpData.niceChirps[Math.floor(Math.random() * niceChirps.length)];
				randoChirp = randoChirp.replace(/USER/g, interaction.user.id);
			} else {
				randoChirp = chirpData.chirps[Math.floor(Math.random() * chirps.length)];
				randoChirp = randoChirp.replace(/USER/g, user.id);
			}
		}
		
		return interaction.reply(randoChirp);
	},
};
