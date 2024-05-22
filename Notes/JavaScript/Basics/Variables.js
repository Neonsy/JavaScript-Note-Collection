// Variables are a way to store data in your code. They are used to store information that you want to use later on.

// One of the classic examples is to imagine a 📦 box that you can put things in. 
// In order to find whatever is in the box, you need to know in which box it is.
// This is done by giving them names. After that, you can put whatever you want in the box and refer to it by its name.

// Naming conventions:
// - Variables should start with a lowercase letter
// - Variables should only contain letters, numbers, and underscores
// - Variables should not start with a number
// - Variables should not contain spaces
// - Variables should be descriptive
// - Variables should use camelCase

// These are only guidelines, but they will help others to understand your code better.
// If you get used to this, you'll also have an easier time reading someone else's code.

// Case Styles:
// - camelCase (e.g. myVariableName)
// - PascalCase (e.g. MyFunctionName)
// - snake_case
// - kebab-case
// - SCREAMING_SNAKE_CASE (e.g. MY_CONSTANT)
// - UPPERCASE
// - lowercase

// Creating a variable:
// There are two ways to create a variable. The first one is to use the `let` keyword. The second one is to use the `const` keyword.
// Note: The `var` keyword is deprecated and should not be used.
// If you wish to learn more about the difference between `let` and `const`, you can read about it here: /JavaScript-Note-Collection/references/const-vs-let

// Example:
let someName = "Amadeus";

// Note: You do not need to use a `;` semicolon at the end of a line. A semicolon is only truly needed when you have several statements on the same line.
// However, it is recommended to use it. It'll also make a switch to another programming language easier.

// Changing a variable:
// As the name suggests, a `normal` variable can be changed. This is simply done by reassigning it.
// In other words, it's the same procedure as when you put something in a box. The only difference is that you don't use the `let` keyword again.

// Example:
let anotherName = "Grande";
anotherName = "Petrick";

console.log(anotherName); // Try to guess the output before looking at it or running the code.

// Output: Petrick

// Constant variables:
// Constant variables are variables that you can't change. This is done by using the `const` keyword.
// However, this behavior is not the same for more complex data types. As mentioned before, if you want to find out more, I encourage you to read about const vs let.

// Example:
const PI = 3.141592653589793;