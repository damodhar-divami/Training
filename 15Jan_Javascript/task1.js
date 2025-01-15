function DynamicPrecision( number, precision)
{
    console.log((number.toFixed(precision)));
}

// For 3 decimal places
console.log("\nFor 3 decimal places\n");
DynamicPrecision( 123.4569876543, 3); 

function DynamicPrecision1( number, precision)
{
    console.log((number.toPrecision(precision)));
}

// For Fixed number of significant digits
console.log("\nFor Fixed number of significant digits Example 5\n");
DynamicPrecision1( 123.4569876543,5);