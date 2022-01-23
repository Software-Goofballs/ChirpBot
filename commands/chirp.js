const { SlashCommandBuilder } = require('@discordjs/builders');

const chirps = 
[
	"<@USER>\nYou’re made of spare parts, aren’t you, bud?",
	"<@USER>\nI wish you weren’t so fuckin’ awkward, bud.",
	"<@USER>\nYour life’s so fucking pathetic, I ran a charity 15k to raise awareness for it.",
	"<@USER>: I’m coming, <@934870321511678062>!\n<@934870321511678062>: Heard the same thing, bud, from your mom seven times, and that’s not even my record, ya fucking loser.",
	"<@934870321511678062>: Fight me, see what happens\n<@USER>: Oh yeah? What’s gonna happen, <@934870321511678062>?\n<@934870321511678062>: Three things: I hit you, you hit the pavement, and I jerk off on your driver’s side door handle.",
	"<@USER>\nSuck my Mr. Cocky, ya fucking loser.",
	"<@USER>\nOh, I wouldn’t say shit if my mouth was full of it.",
	"Fuck you, <@USER>, your life is so pathetic I get a charity tax break just by hanging around you!",
	"Fuck you, <@USER>! Your mom just liked my Instagram post from two years ago in Puerto Vallarta. Tell her I’ll put my swim trunks on for her any time she likes.",
	"<@USER>\nI see the muscle shirt came today. Muscles coming tomorrow? Did ya get a tracking number? Oh, I hope he got a tracking number. That package is going to be smaller than the one you’re sportin’ now.",
	"<@USER>\nFuck, lemony snicket, what a series of unfortunate events you fuckin’ been through, you ugly fuck.",
	"<@USER>\nGive yer balls a tug.",
	"<@USER>\nI made your mom so wet, Trudeau had to deploy a 24-hour national guard unit to stack sandbags around my bed.",
	"Fuck you, <@USER>, your mom ugly cried because she left the lens cap on the camcorder last night.",
	"Fuck you, <@USER>. Tell your mom to top up the cell phone she bought me so I can FaceTime her late night.",
	"Fuck you, <@USER>, I made your mom cum so hard that they made a Canadian heritage minute out of it and Don McKellar played my dick.",
	"Fuck you, <@USER>, your mom shot cum straight across the room and killed my Siamese fighting fish, threw off the pH levels in my aquarium.",
	"Fuck you, <@USER>, tell your mom I drained the bank account she set up for me. Top it up so I can get some fucking KFC.",
	"Fuck you, <@USER>, your breath’s so bad it gave me an existential crisis — it made me question my whole life.",
	"Fuck you, <@USER>, tell your mom to leave me alone, she’s been laying on my waterbed since Labour Day.",
	"<@USER>\nShoulda heard your mom last night, she sounded like my great aunt when I pop in for a surprise visit, like, `Oooh!`",
	"<@USER>\nYour life’s so pathetic, I get a Canadian tax credit just for spending time with you, ya fuckin’ loser!"
]

module.exports = 
{
	data: new SlashCommandBuilder()
		.setName('chirp')
		.setDescription('Chirps at people')
		.addUserOption(option => option.setName('target').setDescription('Who ya chirping at?')),
	async execute(interaction) 
	{
		const user = interaction.options.getUser('target');
		let randoChirp = chirps[Math.floor(Math.random() * chirps.length)]
		if ( user )
		{
			if ( user.tag === 'TheGuardianG13#7157' )
			{
				randoChirp = "The Guardian thinks very highly of <@" + interaction.user.id + ">!";
			}
			else
			{
				randoChirp = randoChirp.replace(/USER/g, user.id);
			}
		}
		else
		{
			randoChirp = randoChirp.replace(/USER/g, interaction.user.id);
		}
		
		return interaction.reply(randoChirp);
	},
};
