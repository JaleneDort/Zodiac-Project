//  ZODIAC PROJECT

// The Zodiacs
var zodiacs = {
	"Capricorn": {
		title: "Capricorn",
		description: "",
		url: "img/squirrel.jpg",
	},
	"Aquarius": {
		title: "Aquarius",
		description: "",
		url: "img/squirrel.jpg",
	},
	"Pisces": {
		title: "Pisces",
		description: "",
		url: "img/squirrel.jpg",
	},	
	"Aries": {
		title: "Aries",
		description: "",
		url: " ",
	},
	"Taurus": {
		title: "Taurus",
		description: "",
		url: " ",
	},
	"Gemini": {
		title: "Gemini",
		description: "",
		url: " ",
	},
	"Cancer": {
		title: "Cancer",
		description: "",
		url: " ",
	},
	"Leo": {
		title: "Leo",
		description: "",
		url: " ",
	},
	"Virgo": {
		title: "Virgo",
		description: "",
		url: " ",
	},
	"Libra": {
		title: "Libra",
		description: "",
		url: " ",
	},
	"Scorpio": {
		title: "Scorpio",
		description: "",
		url: " ",
	},
	"Sagittarius": {
		title: "Sagittarius",
		description: "",
		url: " ",
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

	}


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
	}


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
	}


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
	}


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
	}


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
	}


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
		else if (usersZodiacDay >= 23 && usersZodiacDay <= 30)
	}


	// for(var = i; i < zodiacs.dates;

	// looping through my Zodiacs to check if what the user typed in matches any of their names
	// for(var = i; i < zodiacs.length; i++) {
	// 	// var activeZodiac = zodiacs[1];
	// 	if(usersZodiac == zodiacs[i].name) {
	// 		// if there's a match plug in THAT Zodiac's content
	// 		myH1.innerText = zodiacs[i].name;
	// 		myP.innerText = zodiacs[i].description;
		
	
}