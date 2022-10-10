/*
10.  Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.

c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

/* a.  */
let text = "Hello World!";
let result = text.toUpperCase();
console.log(result)


//////////////////////////////////////////////////////////////////////////
/* b.  */
function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
const result1 = capitalizeFirstLetter('javascript');
console.log(result1);


////////////////////////////////////////////////////////////////////////
/* c.  */
let text1 = "Hello World!";
let result2 = text1.toLowerCase();
console.log(result2)


///////////////////////////////////////////////////////////////////////
/* d.  */
function halv_array_swap(iarra) {
    if (((iarra.length)%2)!=0){
      return false;
    }
  
    for (var i = 0; i < iarra.length / 2; i++) {
      var tmp = iarra[i];
      iarra[i] = iarra[i + iarra.length / 2];
      iarra[i + iarra.length / 2] = tmp;
    }
    return iarra;
  }
  
  console.log(halv_array_swap([1,2,3,4,5,6]))
  console.log(halv_array_swap([1,2,3,4,5,6,7]))


  ////////////////////////////////////////////////////////////////////////////
/* e.  */
  function duplicateCharCount(str) {	
	if(str) {
		var obj = {};
		for(let i = 0; i < str.length; i++) {
			if(obj[str[i]]){
				obj[str[i]] += obj[str[i]];
			}else {
				obj[str[i]] = 1;
			}
		}
		console.log(obj);
	}		
}

duplicateCharCount("aabcdd");

///////////////////////////////////////////////////////////////////////////////////////
/* f.  */
function reverseString(str) {
   // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello world'));