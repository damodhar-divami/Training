const fruits = ["Apple","Mango","Pineapple","Guava","Banana","orange","Grape","Cherry"];
// console.log(fruits.sort());// Sorts array Alphabetically

// console.log(fruits.reverse()); // sorts reverse

console.log(fruits);


console.log(fruits.toSorted());  // sorts the Array without altering the Original array


console.log(fruits.toReversed());  // Reverse the Array without altering the Original array

const numArray=[2,4,5,6,7,8,1];

console.log(numArray.sort(function(a,b)  // Numerical Ascending Order Sort
{
    return a-b;
}));
console.log(numArray.sort(function(a,b) // Numerical Descending Order Sort
{
    return b-a;
}));


console.log(numArray.sort(function()
{
    return 0.5 - Math.random();
}));

console.log(Math.max.apply(null,numArray));


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];


  console.log(cars.sort(function(a,b)
{
    return b.year - a.year;
}));
