function TypeConvertor(val , Type)
{
    var x;
    if(Type=="String")
    {
        x=val.toString();
        console.log(typeof(x));
        console.log(x);
    }
    else if(Type == "Number")
    {
        x=Number(val);
        console.log(x);
        console.log(typeof(x));
       
    }
    else 
    {
        x=Boolean(val);
        console.log(x);
        console.log(typeof(x));
       
    }
    return x;
}

// For Boolean
console.log("\nFor Boolean\n");
TypeConvertor(0, "Boolean");

// For Number
console.log("\nFor Number\n");
TypeConvertor("1001", "Number");

// For String
console.log("\nFor String\n");
TypeConvertor(1001, "String");