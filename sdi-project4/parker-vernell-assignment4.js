/* Vernell Parker
   SDI 1212
   Project 4
   Code Library
*/

var myLibrary = function(){

//  String for phone number Pattern
	


//  String for email address
	
			  


//  String start with http: or https:



//  Title-case a string


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
		"num": num
	
	}


};


var newLib = new myLibrary();

var arr=[15,45,81,64,125,792,458,1657,152,154,20],num=10;
console.log(arr.minGreaterThan(num));