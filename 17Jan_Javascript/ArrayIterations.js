const numArray=[1,2,3,4,5,6,7,8,9,6,4,3,8,2];
numArray.forEach(function(i)
{
    // console.log(i);
});


numArray.map(function(value, index, numArray)
{
    console.log(value-1);
});


console.log(numArray.flatMap((x)=>x*2));


console.log(numArray.filter(function(value)
{
    return value > 5 && value < 7;
}));

console.log(numArray.reduce(function(total,value)
{
    return total + value;
}));