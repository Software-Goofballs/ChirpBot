const { SlashCommandBuilder } = require('@discordjs/builders');

const chirps = [
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
];

const niceChirps = [
	"<@USER>\nYou’re made of everything nice, aren’t you, bud?",
	"<@USER>\nI wish you a nice day, bud.",
	"<@USER>\nYour life’s so freaking special. We are blessed to have you in ours.",
	"<@USER>: I’m coming, <@934870321511678062>!\n<@934870321511678062>: I'm glad you are going to be able to make it over. You are a real gem friend.",
	"<@934870321511678062>: Come with me, see what happens\n<@USER>: Oh yeah? What’s gonna happen, <@934870321511678062>?\n<@934870321511678062>: Three things: we'll go eat, catch a movie, and then get ice cream.",
	"<@USER>\nGive me a high five, champ!",
	"<@USER>\nOh, I just have nothing but nice things to say about you.",
	"Love you, <@USER>! My life is so wonderful with you in it!",
	"Hi, <@USER>! Your mom must be so proud to have a great child like you.",
	"<@USER>\nI see your muscles have really toned. Those workouts are really doing you good, champ.",
	"<@USER>\nOh, James Stewart, what a wonderful life it is to know you!",
	"<@USER>\nGive yer mom a hug!",
	"<@USER>\nYou are so nice, Canadians look to you for inspiration.",
	"Hi, <@USER>, your mom must cry tears of joy for how proud she is of you.",
	"Hi, <@USER>. Tell your mom you love her over FaceTime tonight.",
	"Hi, <@USER>, don't forget to brush your teeth every morning and night!",
	"Hi, <@USER>, some days can be real hard so don't be afraid to have a good cry.",
	"Hi, <@USER>, how about we got get KFC sometime? My treat.",
	"Hi, <@USER>, your friendship really makes me want to live a better life.",
	"Hi, <@USER>, we should go out and have some fun next Labor Day weekend.",
	"Hi, <@USER>, I hope you are having a very pleasant day.",
	"<@USER>\nI saw your mom last night. She said you are her favorite child.",
	"<@USER>\nIf you ever find it hard to believe in yourself, I hope you can believe in the me that believes in you."
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chirp')
		.setDescription('Chirps at people')
		.addUserOption(option => option.setName('target').setDescription('Who ya chirping at?')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		let randoChirp;
		if (user == undefined) {
			randoChirp = chirps[Math.floor(Math.random() * chirps.length)];
			randoChirp = randoChirp.replace(/USER/g, interaction.user.id);
		} else {
			if (user.tag == 'TheGuardianG13#7157') {
				randoChirp = niceChirps[Math.floor(Math.random() * niceChirps.length)];
				randoChirp = randoChirp.replace(/USER/g, interaction.user.id);
			} else {
				randoChirp = chirps[Math.floor(Math.random() * chirps.length)];
				randoChirp = randoChirp.replace(/USER/g, user.id);
			}
		}
		
		return interaction.reply(randoChirp);
	},
};
