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
      "Yes, it is true. I, Michael Scott, am signing up with an online dating service. Thousands of people have done it, and I am going to do it. I need a username. And I have a great one. Little kid lover. That way, people will know exactly where my priorities are at",
      "There is a master key and a spare key for the office. Dwight has them both. When I asked, \‘What if you die, Dwight? How will we get into the office?\’ He said, \‘If I\'m dead, you guys have been dead for weeks\’",
      "I really should have a tweeter account.",
      "Wow. Ben Franklin, you\'re really kind of a sleazebag.",
      "I\'ve trained my major blood vessels to retract into my body on command. Also, I can retract my penis up into itself.",
      "Every word out of your mouth is like the squawk of an ugly pelican.",
      "No matter how you get there, or where you end up, human beings have this miraculous gift to make that place home.",
      "That has sort of an oaky afterbirth.",
      "Really, Andy? It\'s Christmas, and you\'re singing about nudity and France.",
      "He had no arms or legs. He couldn\'t hear, see, or speak. This is how he led a nation.",
      "How the turntables...",
      "I want to be wined and dined and... sixty-nined!",
      "If you think she\'s hot now, you should have seen her two years ago.",
      "How are you not murdered every hour?",
      "He lives on Sesame Street, dumbass.",
      "For years I thought, don\'t end up like Stanley. Now I am wondering if I even have what it takes.",
      "You cheated on me? When I SPECIFICALLY asked you not to!",
      "Where have you been? And don\'t say the bathroom because I kicked in all the stalls.",
      "Dwight you ignorant slut.",
      "I feel God in this Chili's",
      "Lord, beer me strength.",
      "PAM! Come rub butter on my foot! I have Country Crock!",
      "This is what you\'re doing now? Taping people in the bathroom?",
      "Crazy world. Lotta smells.",
      "Just poopin\'. You know how I be.",
      "Boy have you lost ya damn mind, cuz I\'ll help ya find it!",
      "You don\'t know me. You\'ve just seen my penis.",
      "Hey brah, I been meanin\' to ask you... Can we get some Red Bull for these things? Sometimes a guy\'s gotta ride ride the Bull, am I right? Later, skater.",
      "BUTTLICKER! OUR PRICES HAVE NEVER BEEN LOWER!",
      "Happy birthday, Jesus. Sorry your party\'s so lame.",
      "Jim is my ace. Dwight is the King up my sleeve. Phyllis is the Old Maid. Oscar is my queen. That\'s easy. Gimme a hard one. That\'s what Oscar said.",
      "Question, which bear is best? FALSE black bear. Fact bears eat beets. Bears, beets, Battlestar Galactica.",
      "Saddle shoes with denim? I will literally call Protective Services.",
      "Don\'t Call My Mother Your Lover!",
      "I don\'t understand the desire to push sweet potato fries on me. I just want regular fries.",
      "Through concentration, I can raise and lower my cholesterol at will.",
      "I wish there was a way to know you\'re in the good ol\' days, before you\'ve actually left them.",
      "You couldn\'t handle my undivided attention.",
      "There is no such thing as an appropriate joke, that\'s why it\'s a joke.",
      "Sometimes you just have to be the boss of dancing.",
      "Well, just tell him to call me ASAP as possible.",
      "Oh God, my mind is going a mile an hour.",
      "I have got to make sure that YouTube comes down to tape this.",
      "In the wild, there is no healthcare. Healthcare is \“Oh, I broke my leg!\” A lion comes and eats you, you\'re dead. Well, I\'m not dead, I\'m the lion, you\'re dead!",
      "Congratulations on your one cousin. I have seventy, each one better than the last!",
      "Nothing stresses me out. Except having to seek the approval of my inferiors.",
      "There are a huge number of yeast infections in this county. Probably because we\'re downriver from that old bread factory.",
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