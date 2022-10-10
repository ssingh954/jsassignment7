/*
8. Write a Javascript function to test whether the first character of a string is lowercase.
*/
function isLowerCase (input) {  
    return input === String(input).toLowerCase()
}

console.log(isLowerCase('hello world'));
// true
console.log(isLowerCase('Hello World'));
// false
