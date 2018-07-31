//  ZODIAC PROJECT

// The Zodiacs
var zodiacs = {
	"Capricorn": {
		title: "Capricorn",
		description: "Also known as 'The Goat', (December 22nd thru January 19th). They are the measured master planners of the Zodiac family. Known for their power of structure and long term goals. They have a lot to teach us.",
		url: "img/capricorn.jpg",
	},
	"Aquarius": {
		title: "Aquarius",
		description: "'The Water Bearer', (January 20th thru February 18th). They are the mad scientist and humanitariand of the world. Their ideas are futuristic and innovative. Their energy helps unite the world for socail justice.",
		url: "img/aquarius.jpg",
	},
	"Pisces": {
		title: "Pisces",
		description: "'The Fish', (February 19th thru March 20th). They are the dreamers and healers of the Zodiac family. Their energy ignites and awakens compassion, imagination and artistry in everyone they meet.",
		url: "img/pisces.jpg",
	},	
	"Aries": {
		title: "Aries",
		description: "Also known as 'The Ram', (March 21st thru April 19th). Pioneers and trailbrazers fighting for their beliefs they are fearless and know how to put themselves out there",
		url: "img/aries.jpg",
	},
	"Taurus": {
		title: "Taurus",
		description: "'The Bull', (April 20th thru May 20th). They are the persistent providers seeking out security all while enjoying the earthly pleasures and getting the job done.",
		url: "img/taurus.jpg",
	},
	"Gemini": {
		title: "Gemini",
		description: "Also known as, 'The Twins', (May 21st thru June 20th). They are by far the most versatile and vibrant in the Zodiac family. Excellent communicators they collaborate and connect with the world thru communication, writing and movement.",
		url: "img/gemini.jpg",
	},
	"Cancer": {
		title: "Cancer",
		description: "The Crab, (June 21st thru July 22nd). Known for being the natural nurturer's of the Zodiac Family they help the world connect thru emotions and deep roots bringing a sense of family.",
		url: "img/cancer.jpg",
	},
	"Leo": {
		title: "Leo",
		description: "'The Lion' (July 23rd thru August 22nd). Leaders and regal rulers of the Zodiac family. They are creative, passionate, leaders and rulers. Known for being tough yet warm hearted in love and life.",
		url: "img/leo.jpg",
	},
	"Virgo": {
		title: "Virgo",
		description: "'The Pure', (August 23rd thru September 22nd). They are the masterful helpers always servings and teaching the world. Their strengths lie in their ability to prioritize wellbeing of themselves, their loved ones and the planet.",
		url: "img/virgo.jpg",
	},
	"Libra": {
		title: "Libra",
		description: "'The Scales', (September 23rd thru October 22nd). Such a beautiful balance Libra's give. They seek out peace and harmony cooperating with others with style and grace.",
		url: "img/libra.jpg",
	},
	"Scorpio": {
		title: "Scorpio",
		description: "'The Scorpion', (October 23rd thru November 21st). By far the most intense and focused of the Zodiac family. They are resourseful, brave and a true friend to all.",
		url: "img/scorpio.jpg",
	},
	"Sagittarius": {
		title: "Sagittarius",
		description: "'The Archer', (November 22nd thru December 21st). Curious and energetic they are the biggest travelers in the Zodiac family. They are generous and have a great sense of humor with a passion for being outdoors.",
		url: "img/sagittarius.jpg",
	}
}
		


// Elements
var myH1 = document.getElementById("emptyH1");
var myP = document.getElementById("emptyP");
var myImg = document.getElementById("emptyImg");
var myInputMonth = document.getElementById("userInput1");
var myInputDay = document.getElementById("userInput2");


// my functions that run when my buttion "GET ZODIAC" is clicked
function getZodiac() {
	// what the user chooses as input
	var usersZodiacMonth = myInputMonth.value 
	var usersZodiacDay = myInputDay.value


// looping through my Zodiacs to check if what the user selected matches any Zodiacs

// JANUARY - Capricorn or Aquarius //
	if(usersZodiacMonth == "January") {
		if(usersZodiacDay < 20) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Capricorn"].title;
			myP.innerText = zodiacs["Capricorn"].description;
			myImg.src = zodiacs["Capricorn"].url;
			// last half of Zodiac Sign but first half of the month

		} 
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 20 && usersZodiacDay <= 31){
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Aquarius"].title;
			myP.innerText = zodiacs["Aquarius"].description;
			myImg.src = zodiacs["Aquarius"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in January
		}
	};


// FEBRUARY - Aquarius or Pisces //
	if(usersZodiacMonth == "February") {
		if(usersZodiacDay < 19) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Aquarius"].title;
			myP.innerText = zodiacs["Aquarius"].description;
			myImg.src = zodiacs["Aquarius"].url;
			// last half of Zodiac Sign but first half of the month

		} 
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 19 && usersZodiacDay <= 29){
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Pisces"].title;
			myP.innerText = zodiacs["Pisces"].description;
			myImg.src = zodiacs["Pisces"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// ONLY 29 days total in February (maximum)
		}
	};


// MARCH - Pisces or Aries //
	if(usersZodiacMonth == "March") {
		if(usersZodiacDay < 21) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Pisces"].title;
			myP.innerText = zodiacs["Pisces"].description;
			myImg.src = zodiacs["Pisces"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 21 && usersZodiacDay <= 31)  {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Aries"].title;
			myP.innerText = zodiacs["Aries"].description;
			myImg.src = zodiacs["Aries"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in March
		}	

	};


// APRIL - Aries or Taurus //
	if(usersZodiacMonth == "April") {
		if(usersZodiacDay < 20) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Aries"].title;
			myP.innerText = zodiacs["Aries"].description;
			myImg.src = zodiacs["Aries"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 20 && usersZodiacDay <= 30) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Taurus"].title;
			myP.innerText = zodiacs["Taurus"].description;
			myImg.src = zodiacs["Taurus"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 30 days in April
		}
	};


// MAY - Taurus or Gemini //
	if(usersZodiacMonth == "May") {
		if(usersZodiacDay < 21) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Taurus"].title;
			myP.innerText = zodiacs["Taurus"].description;
			myImg.src = zodiacs["Taurus"].url;	
			// last half of Zodiac Sign but first half of the month	

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 21 && usersZodiacDay <= 31) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Gemini"].title;
			myP.innerText = zodiacs["Gemini"].description;
			myImg.src = zodiacs["Gemini"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in May
		}
	};


// JUNE - Gemini or Cancer //
	if(usersZodiacMonth == "June") {
		if(usersZodiacDay < 21) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Gemini"].title;
			myP.innerText = zodiacs["Gemini"].description;
			myImg.src = zodiacs["Gemini"].url;
			// last half of Zodiac Sign but first half of the month	

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 21 && usersZodiacDay <= 30) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Cancer"].title;
			myP.innerText = zodiacs["Cancer"].description;
			myImg.src = zodiacs["Cancer"].utl;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 30 days in June
		}
	};


// JULY - Cancer or Leo //
	if(usersZodiacMonth == "July") {
		if(usersZodiacDay < 23) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Cancer"].title;
			myP.innerText = zodiacs["Cancer"].description;
			myImg.src = zodiacs["Cancer"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 23 && usersZodiacDay <= 31) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Leo"].title;
			myP.innerText = zodiacs["Leo"].description;
			myImg.src = zodiacs["Leo"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in July
		}
	};


// AUGUST - Leo or Virgo //
	if(usersZodiacMonth == "August") {
		if(usersZodiacDay < 23) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Leo"].title;
			myP.innerText = zodiacs["Leo"].description;
			myImg.src = zodiacs["Leo"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 23 && usersZodiacDay <= 31) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Virgo"].title;
			myP.innerText = zodiacs["Virgo"].description;
			myImg.src = zodiacs["Virgo"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in Augusut
		}
	};


// SEPTEMBER - Virgo or Libra //
	if(usersZodiacMonth == "September") {
		if(usersZodiacDay < 23) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Virgo"].title;
			myP.innerText = zodiacs["Virgo"].description;
			myImg.src = zodiacs["Virgo"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 23 && usersZodiacDay <= 30) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Libra"].title;
			myP.innerText = zodiacs["Libra"].description;
			myImg.src = zodiacs["Libra"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 30 days in September
		}
	};


// OCTOBER - Libra or Scorpio //
	if(usersZodiacMonth == "October") {
		if(usersZodiacDay < 23) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Libra"].title;
			myP.innerText = zodiacs["Libra"].description;
			myImg.src = zodiacs["Libra"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 23 && usersZodiacDay <= 31) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Scorpio"].title;
			myP.innerText = zodiacs["Scorpio"].description;
			myImg.src = zodiacs["Scorpio"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in October
		}

	};


// NOVEMBER - Scorpio or Sagittarius //
	if(usersZodiacMonth == "November") {
		if(usersZodiacDay < 22) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Scorpio"].title;
			myP.innerText = zodiacs["Scorpio"].description;
			myImg.src = zodiacs["Scorpio"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 22 && usersZodiacDay <= 30) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Sagittarius"].title;
			myP.innerText = zodiacs["Sagittarius"].description;
			myImg.src = zodiacs["Sagittarius"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 30 days in November
		}

	};


// DECEMBER - Sagittarius or Capricorn //
	if(usersZodiacMonth == "December") {
		if(usersZodiacDay < 22) {
			// if usersZodiacDay less than start day of next sign
			//print Zodiac title, image and description
			myH1.innerText = zodiacs["Sagittarius"].title;
			myP.innerText = zodiacs["Sagittarius"].description;
			myImg.src = zodiacs["Sagittarius"].url;
			// last half of Zodiac Sign but first half of the month

		}
		// otherwise... check start day of new Zodiac Sign and run for 
		// remainder of days left in the month to equal New Zodiac Sign
		else if(usersZodiacDay >= 22 && usersZodiacDay <= 31) {
			// if falls in next Zodiac date ranges...
			// print Zodiac title, image and description
			myH1.innerText = zodiacs["Capricorn"].title;
			myP.innerText = zodiacs["Capricorn"].description;
			myImg.src = zodiacs["Capricorn"].url;
			// first half of new Zodiac Sign and last half of the month

		} else {
			document.write("Date not valid, please try again")
			// total of 31 days in December
		}

	};


	// for(var = i; i < zodiacs.dates;

	// looping through my Zodiacs to check if what the user typed in matches any of their names
	// for(var = i; i < zodiacs.length; i++) {
	// 	// var activeZodiac = zodiacs[1];
	// 	if(usersZodiac == zodiacs[i].name) {
	// 		// if there's a match plug in THAT Zodiac's content
	// 		myH1.innerText = zodiacs[i].name;
	// 		myP.innerText = zodiacs[i].description;
		
	
}