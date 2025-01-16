// Type coercion

let a = '10' //String
let b = 10  //Number
let c = a + b;
console.log(c); //prints 1010 by automatically(implicitly) to the String
 
a = 10; //Number
b = '10'; //String
c = a - b ;
console.log(c); // Implicitly converts into Number


a = 10; //Number
b = '10'; //String
c = a * b ;
console.log(c) // Implicitly converts into Number

a = 10; //Number
b = '10'; //String
c = a / b ;
console.log(c) // Implicitly converts into Number



let z = true + '10';
console.log(z);// implicitly converts into String

z = true + 11;
console.log(z);// implicitly converts into Number



//Equality Operator

console.log(10 == '10');  //returns true as output , String '10' is coerced to Number 10

console.log(true == 1); //returns true as output ,  Boolean true is coerced to Number 1

console.log(true == 'true')  //returns false as output , String 'true' is coerced to NaN which is not Equal to 1

console.log('true' == true); // returns false, same reason as above


//Corner Cases

console.log("\n",Number("")) // returns 0 

console.log(Number("\n\n\t")); // returns 0

console.log(Number(null)) //returns 0

console.log(Number(undefined)); // returns NaN

console.log(Number([])); // returns 0

console.log(Number([2,4,3,2])) // returns NaN

console.log(Number([null])); // returns 0

console.log(Number([undefined])); // returns 0

console.log(Number({})) // returns NaN

console.log(String(null)) // returns "null"

console.log(String(-0)) // returns "0"

console.log(String([null])); // returns ""

console.log(Boolean("_")); // returns true 







