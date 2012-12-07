// Vernell Parker
// SDI 1212
// Project 3

var drill = "Drill Sergeant";
var soldier = ["Miller", "Johnson", "Perez"];
var gear = ["rifle", "handheld", "grenade!!!"];
var warCry = ("Let them come. " + "We'll kill them all!!!!");
var theMoment = ("It is time to" + " rid ourselves of this alien menus!!!" )
var distance = 150
var ready = true
var crunchtime = 20 
var ship = {
	name: "Death Star",
	race: "Glormac",
	size: " 100 miles long",
	threat: " Immediate Danger",
};


ship.name = "Destoryer";

console.log("A new ship known as the " + ship.name + " has been spotted above the skys.");
console.log(drill + " said, " + warCry);
console.log(theMoment); 	
console.log("Open your " + gear[1] + " and get me the the statics on the male and female sexes of the Glormacs'. Find me there weaknesses!!!!") 

var handheldScreen = {
"Glormac": [
	{
		"Sex":        "Male",
		"Weaknesses": "Skin: vulnerable to extreme heat",
	},
	{
		"Sex":		  "Female",
		"Weaknesses": "Skin porous: vulnerable to high levels of smoke"
	}
  ]
}

console.log(handheldScreen)
console.log("We have the information we need.");
console.log("How far away is the enemy?")
console.log(distance + " miles away")
if (distance >= 150){
	console.log("We have plenty of time to put our plan in place!!!")
	} else { console.log(" We are running out of time")
	};
console.log("Is everyone ready to do what we have to do to when this battle")
if (ready === true){
	console.log("Then let us prepare for the final battle for our home world!!!")
	} else { console.log("We can't wait any longer!!! May God help us all!!!")
	};
console.log("This is a fight til the death")
console.log(warCry)
console.log("How large is the ship?")
console.log(ship.size)
console.log("We're going to blow it out of the sky")
console.log(soldier + " get phaser cannons ready!")
console.log("New information just came in...")
console.log("The ship is smaller then we first project the computers were wrong")
ship.size = "50 miles long";
console.log("The new information is is telling us that the new size is only " + ship.size);
while (crunchtime > 0) {
	console.log(crunchtime + " seconds");
	crunchtime--;
};

console.log("FIRE FIRE FIRE, yells " + drill);
console.log("As the sound of cannon begin to fire off");
console.log("And with the sound of those cannons birthed a world as we know it")