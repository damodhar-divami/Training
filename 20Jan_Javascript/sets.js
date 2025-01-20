const letters = new Set(['a','b','c','d','e']);  // creates a new Set 

console.log(letters); 

letters.add('f');  // adds new elements into the Set
letters.add('a');

console.log(letters);

console.log(letters.has('a'));

for(let letter of letters)    //  accessing the set
{
    console.log(letter);
}

let values = letters.values();

for(let letter of values)    // accessing the values of the set
{
    console.log(letter);
}
let entries = letters.entries();   // Accessing the both key and values in the set (set has no keys so, values are print twice)

for(let letter of entries)     
{
    console.log(letter);
}




console.log(letters.delete('f'));   //  Deletes the specific character from the Set

console.log(letters);