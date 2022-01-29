const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const path = require('path');
const memory = path.resolve(__dirname, "./../memory/data.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('new-chirp')
		.setDescription('Add a chirp to the bot')
		.addStringOption(option => option.setName('chirp').setDescription('Enter the new chirp, using USER for replacable users').setRequired(true))
        .addBooleanOption(option => option.setName('nice').setDescription('Is this kind?')),
	async execute(interaction) {
		let chirp = interaction.options.getUser('chirp');
        const nice = interaction.options.getBoolean('nice');
		let chirpData = JSON.parse(fs.readFileSync(memory));
        chirp.replace(/USER/g,"<@USER>")
        if (nice) {
            chirpData.niceChirps.push(chirp);
        } else {
            chirpData.chirps.push(chirp);
        }
		
        fs.writeFileSync(memory, JSON.stringify(chirpData, undefined, 4));
		return interaction.reply(`Chirp added!`);
	},
};
