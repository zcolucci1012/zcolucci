var media = [
	"monologue",
	"dialogue",
	"subversion of expectations",
	"character",
	"meme",
	"song",
	"story",
	"article headline",
	"knock-knock joke",
	"pickup line",
	"pun",
	"wordplay",
	"edgy joke",
	"absurd joke",
	"one-liner",
	"slapstick joke",
	"self-deprecating joke",
	"list joke",
	"analogy",
	"dirty joke",
	"personal story",
	"roast",
	"parody",
	"light bulb joke",
	"observation",
	"dad joke",
	"yo mama joke",
	"tweet",
	"rap",
	"poem",
	"meta joke",
	"\"what do you call a ___\" joke",
	"anti-joke"
]

var topics = [	
	"drugs",
	"family",
	"politics",
	"school",
	"video games",
	"anime",
	"television",
	"relationships",
	"nature",
	"sports",
	"science",
	"music",
	"books",
	"crime",
	"friends",
	"space",
	"work",
	"parties",
	"religion",
	"history",
	"math",
	"language",
	"men",
	"women",
	"geography",
	"sex",
	"movies",
	"mental disorders",
	"race",
	"sexuality",
	"money",
	"disabilities",
	"food",
	"animals",
	"the human body",
	"celebrities",
	"culture",
	"the future",
	"disease",
	"social media",
	"art",
	"theater",
	"dating",
	"porn",
	"children",
	"old people",
	"drinking",
	"parents",
	"trends",
	"toys",
	"corporations",
	"governments"
]

var multiple = false;

function generate(){
	var topic = document.getElementById("topic");
	var topic2 = document.getElementById("topic2");
	var topic2p = document.getElementById("topic2p")
	var medium = document.getElementById("medium");
	topic.innerHTML = topics[Math.floor(Math.random() * topics.length)];
	medium.innerHTML = media[Math.floor(Math.random() * media.length)];
	if (!multiple){
		topic2.innerHTML = "";
		topic2p.setAttribute("style", "visibility: hidden");
	}
	else {
		do {
			topic2.innerHTML = topics[Math.floor(Math.random() * topics.length)];
		} while(topic2.innerHTML == topic.innerHTML)
		topic2p.setAttribute("style", "visibility: visible");
	}
	
}

function toggleMultiple(){
	multiple = !multiple
	var multipleButton = document.getElementById("multiple");
	if (multiple) multipleButton.innerHTML = "One Topic";
	else multipleButton.innerHTML = "Two Topics";
}
