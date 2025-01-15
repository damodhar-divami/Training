function ArithmaticOperations(num1, num2) {
   console.log("Addition: ", num1 + num2);
    console.log("Subtraction: ", num1 - num2);
    console.log("Multiplication: ", num1 * num2);
    console.log("Division: ", num1 / num2)
}
// Two values as Numbers
console.log("\nTwo values as Numbers\n");
ArithmaticOperations(10, 5);

// Two values as Strings
console.log("\nTwo values as Strings\n");
ArithmaticOperations("Hello", "World");

// One Number and One string
console.log("\nOne Number and One string\n");
ArithmaticOperations(10, "1001");