// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Just pretend like we\'re talking until the cops leave.",
      "I ate a seahorse.",
      "I am Beyonce, always.",
      "I don\'t talk trash, I talk smack. They\'re totally different.",
      "RYAN STARTED THE FIRE.",
      "The worst thing about prison was the dementors.",
      "I\'m hot, you\'re hot. Let\'s get it poppin.",
      "Do you think doing alcohol is cool?",
      "Identity theft is not a joke Jim. Millions of families suffer every year!",
      "Occasionally I'll hit somebody with my car. So sue me.",
      "DID I STUTTER?",
      "I\'m not superstitious, but I am a little stitious.",
      "There\'s too many people on this earth. We need a new plague.",
      "I DECLARE BANKRUPTCY",
      "Sometimes I\'ll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
      "You know what they say. \'Fool me once, strike one. But fool me twice… strike three.\'",
      "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
      "I love inside jokes. I\'d love to be a part of one someday.",
      "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
      "That\'s what she said.",
      "Women are like wolves. If you want one you must trap it. Snare it. Tame it. Feed it.",
      "Before I do anything I ask myself, \'Would an idiot do that?\' and if the answer is yes, I do not do that thing.",
      "There are 3 things you never turn your back on: bears, men you have wronged, and a dominant male turkey during mating season.",
      "Why tip someone for a job I'm capable of doing myself? I can deliver food. I can drive a taxi. I can, and do, cut my own hair. I did however, tip my urologist, because I am unable to pulverize my own kidney stones.",
      "I never smile if I can help it, Showing one\'s teeth is a submission signal in primates. Someone smiles at me, all I see is a chimpanzee begging for its life.",
      "A real man swallows his vomit when a lady is present.",
      "I love catching people in the act. That\'s why I always whip open doors.",
      "Reject a woman, and she will never let it go. One of the many defects of their kind. Also, weak arms.",
      "Powerpoints are the peacocks of the business world; all show, no meat.",
      "In an ideal world I would have all ten fingers on my left hand and the right one would just be left for punching.",
      "I\'ll be the Number Two guy here in Scranton in six weeks. How? Name repetition, personality mirroring, and never breaking off a handshake. I\'m always thinking one step ahead. Like a carpenter that makes stairs.",
      "I wake up every morning in a bed that\'s too small, drive my daughter to a school that\'s too expensive, and then I go to work to a job for which I get paid too little, but on Pretzel Day? Well, I like pretzel day.",
      "Poop is raining from the ceilings. Poop!",
      "I sprout mung beans on a damp paper towel in my desk drawer. Very nutritious. But they smell like death.",
      "Hug it out, bitch.",
      "How would I describe myself? Three words. Hard-working. Alpha male. Jackhammer. Merciless. Insatiable.",
      "I don\'t see it. I think they both could do better.",
      "Every little boy fantasizes about his fairy-tale wedding.",
      "What is wrong with these people? They have no willpower. I went -- I once went 28 years without having sex. And then again for seven years.",
      "Andy Bernard does not lose contests. He wins them... or he quits them because they are unfair.",
      "I wonder what people like about me? ... Probably my jugs."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
    let allParagraphs = [];
    // Generate the number of paragraphs as specified by the user
    while (allParagraphs.length < numberOfParagraphs) {
      allParagraphs.push(this.getParagraph());
    }
    // Convert array into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
      paragraphHTML += "<p>" + paragraph + "</p>";
    });
    return paragraphHTML;
  }
  
  module.exports = loremIpsum;