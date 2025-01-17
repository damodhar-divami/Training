const fruits = ["Apple","Mango","Pineapple","Guava","Banana","orange","Grape","Cherry"];
let position = fruits.indexOf("Banana")+1;// indexOf() returns the index of the item.
console.log(position);//5 returns the Position of the item.

let lastposition = fruits.lastIndexOf("Banana")+1; // returns the index of last Occurance of the item
console.log(lastposition); 

console.log(fruits.includes("Apple")); // returns true if the item is present in the Array

const numArray=[2,4,8,16,32];
let find = numArray.find(test); // returns the value 
function test(value, index, array)
{
    return value > 17;
}
console.log(find);

let find1 = numArray.findIndex(test); // returns the value 
console.log(find1);


console.log(Math.ceil(-9.00001));

