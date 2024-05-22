// Because JavaScript is meant to run logic and modify HTML, there is no way to display something to the website without the use of more advanced methods.
// This is why you'll learn how to use the `console.log()` method to display something to the console.

// Print to the console:
// As you may have already noticed with the comment section, there is code that has `()` parentheses. This is known as a function call.
// Functions are like mini-programs that can be called from within your code.

// The `console.log()` is brought to you by the language itself. It takes a variable or a string as an argument.

// Outputting a string:
// This can simply be done by calling the function, using its name and a pair of parentheses.
console.log("Hello world!"); // Output: Hello world!

// Note: In order to see the output in your browser, you need to open the console. 
// This can in most browsers be done by pressing `F12` or `CTRL + SHIFT + I`. 
// In Chrome, as well as Chromium-based browsers, you can also open the console by pressing `CTRL + SHIFT + J`.

// Outputting a variable:
// This is the same as before but we need to have a variable defined beforehand.
let myName = "Timothy";
console.log(myName); // Output: Timothy

// Outputting multiple variables:
// This can be done by separating the variables with a comma.
let myAge = 23;
console.log(myName, myAge); // Output: Timothy 23

// Outputting variables with a string:
// To display a variable with a string, you can use concatenation. This can be achieved by using the `+` operator.
console.log("My name is " + myName + " and I am " + myAge + " years old."); 
// Output: My name is Timothy and I am 23 years old.

// Using template literals:
// A template literal is a string that can contain variables. This allows us to output a string with variables in it, instead of having to use concatenation.
// To do that, you need to wrap the string in backticks (`). Your variables will then be wrapped in `${}` curly brackets.
console.log(`My name is ${myName} and I am ${myAge} years old.`); 
// Output: My name is Timothy and I am 23 years old.
