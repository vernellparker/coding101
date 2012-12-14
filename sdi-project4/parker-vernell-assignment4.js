/* Vernell Parker
   SDI 1212
   Project 4
   Code Library
*/

var myLibrary = function(){

//  String for phone number Pattern
	var phnum = function (val) {
        var phoneNumber = val;
        var pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/; 
        if (pattern.test(phoneNumber)) { 
            return true
        } else {
            return false; 
        }
    }


//  String for email address
	var emailCheck = function(val) {
    	var emailAddress = val
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    	if (emailPattern.test(emailAddress)) {
        return true;
    	} else {
        return false;
    	}
    }
			  


//  String start with http: or https:



//  Title-case a string


var caps = function(val) {
 
    String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    // takes my name as "shannon plesh" and converts the first letter of each word to upper case.
    return val.toProperCase();
    

}


//  String return separator


//  Decimals Places 


//  Fuzzy- match a number


//  Number of hours or days


//  Return Actual Number

	

//  Smallest value in array
Array.prototype.minGreaterThan = function(numValue){
 
  var num=Number.POSITIVE_INFINITY,
  i;
 
    for (i=0;i<this.length;i++) if (numValue<this[i] && this[i]<num) num=this[i];
    return num;
};

//  Total value in an array




//  Return array sorted by the value

	return {
		
	    "emailCheck": emailCheck,
		"phnum": phnum,
		"caps": caps
	
	}


};


var newLib = new myLibrary();



// Smallest value in an array
var arr=[15,45,81,64,125,792,458,1657,152,154,20],num=20;
console.log(arr.minGreaterThan(num));

// email pattern test
console.log("Is this email correct?" + newLib.emailCheck("meyahoo.com"))

//Phone Number Pattern
console.log("Is this a valid phone number?" + newLib.phnum("706-284-8605"))

console.log(newLib.caps("money mike"));