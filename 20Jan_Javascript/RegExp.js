let text = "Regular Expressions";
let n = text.search(/Expressions/i);  // returns index if the regExp matches the pattern
console.log(n); // 8

console.log(text.replace(/Regular/,"irregular"));  // It replaces the text if it matches the pattern;

console.log(text.match(/(Re)/d));// It matches all the strings Which starts or end with given pattern

console.log(text.match(/[e]/g));  // Returns the matching strings by Finding any of the characters between the brackets

console.log(text.match(/[0-9]/g));  // returns the numbers in the range

const pattern = /get/;
console.log(pattern.test("Try to get what you want"));  // returns true if pattern matches the String

console.log(/get/.test("Try to get what you want"));   // Alternative Way

console.log(pattern.exec("Try to get what you want"));  // Returns the index and the input of the matched pattern String

const emailRegExp = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //Regular Expression for verifying the Email Address
const verify = emailRegExp.test("rage.dhamodhar123@gmail.com");  
console.log(verify);
