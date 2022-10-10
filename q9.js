/*
9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods. How will you handle that ?
*/

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("yes, YES, Yes"));
