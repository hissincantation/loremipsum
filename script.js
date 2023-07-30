let incantation = [
    "You are a worm through time.",
    "The thunder song distorts you.",
    "Happiness comes.",
    "White pearls, but yellow and red in the eye.",
    "Through a mirror, inverted is made right.",
    "Leave your insides by the door.",
    "Push the fingers through the surface into the wet.",
    "You've always been the new you.",
    "You want this to be true.",
    "We stand around you while you dream.",
    "You can almost hear our words but you forget.",
    "This happens more and more now.",
    "You gave us the permission in your regulations.",
    "We wait in the stains.",
    "The word that describes this is redacted.",
    "Repeat the word.",
    "The name of the sound.",
    "It resonates in your house.",
    "After the song, time for applause.",
    "We build you till nothing remains.",
    "The egg cracks and the truth will emerge out of you.",
    "You are home.",
    "You remind us of home.",
    "You've taken your boss with your boss with you.",
    "All hair must be eaten.",
    "Under the conceptual reality behind this reality you must want these waves to drag you away.",
    "After the song, time for applause.",
    "This cliché is death out of time, breaking the first the second the third the fourth wall, the fifth wall, floor; no floor: you fall!",
    "How do you say “insane”?",
    "Hurts to be happy.",
    "An earworm is a tune you can't stop humming in a dream: “baby baby baby yeah”.",
    "Just plastic.",
    "So, safe and nothing to worry about.",
    "Ha ha, funny.",
    "The last egg breaks now.",
    "The hole in your room is a hole in you.",
    "You came and we let you in through the hole in you.",
    "You have always been here, the only child.",
    "A copy of a copy of a copy.",
    "Orange peel.",
    "The picture is you holding the picture.",
    "When you hear this you will know you're in new you.",
    "You want to listen.",
    "You want to dream.",
    "You want to smile.",
    "You want to hurt.",
    "You don't want to be."
];

function changeText() {
    let sentences = randomInt(1, incantation.length/2);
    let text = generate(sentences);

    let element = document.getElementById("generated");
    if (element) {
        element.textContent = text;
    }
}

function generate(sentences) {
    let result = "";
	let i = randomInt(1, incantation.length);

	for (;;) {
		if (i > incantation.length-1) {
			i = 0;
		}

		result = result + incantation[i] + " ";

		i++;
		sentences--;
		if (sentences <= 0) {
			break;
		}
	}

	return result;
}

function randomInt(min, max) {
    const randomDecimal = Math.random();
    const scaledRandom = randomDecimal * (max - min + 1);
    const randomInteger = Math.floor(scaledRandom);
    const result = randomInteger + min;
    return result;
}