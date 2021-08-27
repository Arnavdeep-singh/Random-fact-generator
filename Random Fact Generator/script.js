var oddtrivia = []
oddtrivia[0] = "The First Computer Was Invented in the 1940s";
oddtrivia[1] = "The Unicorn Is the National Animal of Scotland";
oddtrivia[2] = "A Dozen Bodies Were Found in Benjamin Franklin’s Basement";
oddtrivia[3] = "Humans Are Just One of the Estimated 8.7 Million Species on Earth";
oddtrivia[5] = "Bee Hummingbirds Are So Small They Get Mistaken for Insects";
oddtrivia[6] = " Scotland has 421 words for “snow”";
oddtrivia[7] = "Blue whales eat half a million calories in one mouthful";
oddtrivia[8] = "Dogs sniff good smells with their left nostril";
oddtrivia[9] = "Humans have jumped further than horses in the Olympics";
oddtrivia[10] = "The Terminator script was sold for $1";
oddtrivia[11] = "Onions were found in the eyes of an Egyptian mummy";
oddtrivia[12] = "An espresso maker was sent into space in 2015";
oddtrivia[13] = "An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production";
oddtrivia[14] = "Steve Jobs, Steve Wozniak, and Ron Wayne started Apple Inc. on April Fools’ Day";
oddtrivia[16] = " Baseball umpires used to sit in rocking chairs";
oddtrivia[17] = "The first commercial passenger flight lasted only 23 minutes";
oddtrivia[18] = "The British Empire was the largest empire in world history";
oddtrivia[19] = "The first stroller was pulled by a goat";
oddtrivia[20] = "May 20, 1873, is the “birthday” of blue jeans";
oddtrivia[22] = "Neil Armstrong’s hair was sold in 2004 for $3,000";
oddtrivia[23] = "Irish bars used to be closed on St. Patrick’s Day";
oddtrivia[24] = "Nikola Tesla hated pearls";
oddtrivia[25] = "Pregnancy tests date back to 1350 BCE";
oddtrivia[26] = "Martin Luther King Jr. got a C in public speaking in high school";
oddtrivia[27] = "Bananas glow blue under black lights";
oddtrivia[28] = "Adult cats are lactose intolerant";
oddtrivia[29] = "Albert Einstein’s eyeballs are in New York City";
oddtrivia[30] = "The Pope can’t be an organ donor";




function oddTrivia() {
    var randomTrivia = Math.floor(Math.random()*(oddtrivia.length));
    document.getElementById('ptrivia').innerHTML = oddtrivia[randomTrivia];
}

function hi(){
    alert (" Follow me at Arnav Animations on YouTube!");
}