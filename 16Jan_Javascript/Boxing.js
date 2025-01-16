// Boxing

const name = "Damodhar";
console.log(name.toUpperCase()); // The Primitive Value is automatically wrapped in an object

let a = new Boolean(true);
if(a)
{
    console.log("Inside a Block");
}
let b = new Boolean(false);
if(!b)
{
    console.log("Inside b Block");
}
let c = Object(false)
if(!c)
{
    console.log("Inside c Block");
}


// Unboxing

let flag = Object(false);
console.log(flag == false);
console.log(flag === false);
console.log(flag.valueOf() == false);
console.log(flag.valueOf() === false);   // The Primitive value is unwraped from an object

let flag1= Number(false);
console.log(flag1 == false);
console.log(flag1 === false);
console.log(flag1.valueOf() == false);
console.log(flag1.valueOf() === false);    // The Primitive value is unwraped from an object



