// Vernell A. Parker
// Project 2
// SDI 1212
// Functions and Loops

var drill = "Drill Sergeant";
var countDown = 10;
var soldier = ["Miller!","Johnson!","Perez!"];
var timeTable = ("Can" + " we" + " make it????"); 
//funcion
var time = function (x,y) {
	var weeks = x-y;
	if (weeks === 0) { 
	console.log(" its too late!!!");
	} else{
	console.log(weeks +" weeks goes by...") 
	};
};

var time2 = function (x,y) {
    var days = x-y;
	return days;
};

//main code

time(10,7);
console.log(".... They are coming..."); 
console.log(".... Closer ...");
console.log("....They came for us...");
console.log("They called to us over loud speakers glorifying the imminent doom that is about to become of us");

days = time2(100,98);
console.log(days + " days until global destruction");
days = time2 (59,58);
console.log(days + " day until global destruction");
if (days === 0) {
	console.log("We need more time");
	} else { ("");
};
console.log("But " + drill + " has an idea that may save the world"); 
console.log(timeTable);
console.log("Yes I think we can make it, Lets nuke em' says the " + drill);
console.log(soldier[0] + "!! I need help with the nuke"); 
console.log(soldier[1] + "!! get everyone ready");
console.log(soldier[2] + "!! get the timer, can you handle that???");
for (var i=0; i < 3; i++) {
	console.log( soldier[i] );
};
if (i=0) {
	console.log(" I need that timer")
	}else {
console.log("We got to go now!")
	};

console.log("Set the timers!!!!")

for (var countDown = 10; countDown > 0; countDown--) {
console.log(countDown + " BEEP!");
}; 

console.log("GOODBYE!!!!");
console.log("Rate this Story...In Code!!!!")

//Rate My Code...In Code
var rate = "10"
if (rate >= 7) { 
console.log(" You My Frind Are AWESOME");
} else { 
	console.log(" Well I Tried, Sorry :(")
};