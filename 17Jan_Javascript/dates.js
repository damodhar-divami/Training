const Today = new Date()
console.log(Today);    // returns todays Date and time in UTC

const Yesterday = new Date("2025-01-16");    // returns Specified Date details include day
console.log(Yesterday);

const sat = new Date(2025,0,18,6,30,37);    // converts to Date
console.log(sat.toString());

const ms = Date.parse("2025-01-02");  // Generates milliseconds between jan 1 1970 to specified Date
console.log(ms);

console.log(Today.getTimezoneOffset());   // Returns the Difference(in Minutes) btw Local time and UST 


let x = false;
let y = new Boolean(false);
console.log(x==y);
