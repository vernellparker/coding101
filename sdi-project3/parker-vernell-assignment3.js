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
	
	