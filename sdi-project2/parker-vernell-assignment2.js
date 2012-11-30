// Vernell A. Parker
// Project 2
// SDI 1212
// Functions and Loops

var drill = "Drill Sergeant";
var countDown = 10;
var soldier = ("Miller", "Johnson" , "Perez");

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

