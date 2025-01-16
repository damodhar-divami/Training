let todo = "learn JavaScript";

console.log(todo.at(3)); //to get the character at the specified index
console.log(todo.charAt(8)); // to get the character at the specified index
console.log(todo.charCodeAt(2)); // to get the unicode of the character at the specified index

console.log(todo.slice(1, 5));// to get the substring from the specified index end index not included
console.log(todo.substring(1, 5));// to get the substring from the specified index end not incl
console.log(todo.substr(1, 4));// to get the substring from the specified index and length

console.log(todo.toUpperCase());// to convert the string to uppercase
console.log(todo.toLowerCase());// to convert the string to lowercase

let str = "Hello";
let str1 = "World";

console.log(str.concat("   ",str1));// to concatenate two strings



let str2 = "                  Hello World         ";
console.log(str2.trim());// to remove the white spaces from the string

let str3 = "aa";
console.log(str3.padStart( 5, "b"));// to pad the string from the start
console.log(str3.padEnd( 5, "b"));// to pad the string from the end

let str4 = "Hello World";
console.log(str4.repeat(3));// to repeat the string


let str5 = "Hello World";
console.log(str5.replace("Hello", "Hi"));// to replace the string with another string

let str6 = "Hello Hello Hello";
console.log(str6.replace("Hello", "Hi"));// to replace the first occurence of the string with another string
console.log(str6.replaceAll("Hello", "Hi"));// to replace all the occurences of the string with another string

let str7 = "a,b,c,d,e";
console.log(str7.split(","));// to split the string based on the separator


let str8 = "Hello World World";
console.log(str8.indexOf("World"));// to get the index of the first occurence of the string
console.log(str8.lastIndexOf("World"));// to get the index of the last occurence of the string
console.log(str8.search("World"));// to get the index of the first occurence of the string
console.log(str8.match("llo"));// to get the matched string
console.log(str8.matchAll(/ld/g));// to get the matched string
console.log(str8.includes("World"));// to check if the string contains the specified string
console.log(str8.startsWith("Hpl"));// to check if the string starts with the specified string


let a= 0.7;
let b= 0.1;
console.log(a+b);// to add two floating point numbers






