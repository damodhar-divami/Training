const fruits = new Map([
    ['apples',200],
    ['oranges',150],
    ['bananas',60]
]);

fruits.set('Guava',100);  // Adds a new key value or Modifies the existing the value for the key

console.log(fruits);

console.log(fruits.get('apples'));  // returns the value if key exists 

console.log(fruits.size);

console.log(fruits.delete('bananas'));  // returns true and deletes the key-value pair if exist\

// console.log(fruits.clear());

console.log(fruits.has('apples'));  // returns true if key exists

let entries = fruits.entries();  // returns key and value pair of the map
 
for(let fruit of entries)
{
    console.log(fruit);
}



console.log(7>>1);

