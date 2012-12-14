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
    	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    	if (emailPattern.test(emailAddress)) {
        return true;
    	} else {
        return false;
    	}
    }
			  

//  Actual Number
var oldNumber =  function(val){
	var newnumber = parseInt(val)
	return newnumber
	
	
}



//  Decimals Places 
var oNumber = function(val){
	var newNew = val.toFixed(2)
	return newNew
}




//  URL


var urlCheck = function(val) {
    	var url = val
    	var urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    	if (urlPattern.test(url)) {
        return true;
    	} else {
        return false;
    	}
}
  

	

//  Smallest value in array
Array.prototype.minGreaterThan = function(numValue){
 
  var num=Number.POSITIVE_INFINITY,
  i;
 
    for (i=0;i<this.length;i++) if (numValue<this[i] && this[i]<num) num=this[i];
    return num;
};



//  Return array sorted by the value

	return {
		"num": num, 
	    "emailCheck": emailCheck,
		"phnum": phnum,
		"urlCheck": urlCheck,
		"oNumber": oNumber,
		"oldNumber": oldNumber
		
	
	}


};


var newLib = new myLibrary();



// Smallest value in an array
var arr=[15,45,81,64],num=20;
console.log("The greatest number is " + arr.minGreaterThan(num));

// email pattern test
console.log("Is this email correct?" + newLib.emailCheck("meyahoo.com"))

//Phone Number Pattern
console.log("Is this a valid phone number?" + newLib.phnum("706-284-8605"))

//  Actual Number
console.log("The new number is " + newLib.oldNumber("22"));

//url check
console.log("Is this a vaild url?" + newLib.urlCheck("//www.google.com/"))

// decimal number
console.log("The correct amount is " + newLib.oNumber(125.4324))