/*
Strings are used to represent text.
They are one of the most common data types you'll work with, and JavaScript provides a rich set of methods to manipulate them.
Let's dive into some of the basics and useful methods for working with strings.
*/

// Creating Strings
/*
You can create strings using single quotes, double quotes, or backticks (for template literals).
*/

let singleQuote = "Hello, world!";
let doubleQuote = "Hello, world!";
let templateLiteral = `Hello, world!`;

// Concatenating Strings
/*
Usually, when you use the `+` operator, it adds up the values on the right side to the value on the left side.
However, that changes in the context of strings.

You can concatenate strings using the `+` operator.
This is the same as using the `concat()` method.

Concatenation means joining two or more strings together.
*/

let str = "Hello, world!";
console.log(str + " How are you?");
// Result: Hello, world! How are you?

// Finding Length
/*
Use the `length` property to find out how many characters are in a string.
*/

console.log(str.length);
// Result: 13

// Accessing Characters
/*
You can access characters in a string using bracket notation.
*/

console.log(str[0]); // "H"
console.log(str.charAt(0)); // "H"
// Result: H
//         H

// Bracket Notation (Index)
/*
The bracket notation is used to access characters in a string by their index.
In JavaScript, the index starts at `0`, meaning that the first character is at index `0`.

You can find more examples regarding indexing at the array section.
*/

console.log(str[0]); // "H"
console.log(str[1]); // "e"
console.log(str[6]); // " "
console.log(str[7]); // "w"
console.log(str[12]); // "!"

// Changing Case
/*
`toUpperCase()` and `toLowerCase()` are used to change the case of a string.
*/

console.log(str.toUpperCase());
console.log(str.toLowerCase());
// Result: HELLO, WORLD!
//         hello, world!

// Trimming Whitespace
/*
`trim()` removes whitespace from both ends of a string.
*/

let spacedStr = "  Hello, world!  ";
console.log(spacedStr.trim());
// Result: Hello, world!

// Extracting Substrings
/*
`substring(start, end)` extracts characters from `start` to `end` (not including `end`).
*/

console.log(str.substring(0, 5));
// Result: Hello

// Replacing Content
/*
`replace(searchValue, newValue)` replaces occurrences of `searchValue` with `newValue`.
*/

console.log(str.replace("world", "JavaScript"));
// Result: Hello, JavaScript!

// Splitting and Joining
/*
The `split(separator)` splits a string into an array of substrings.

The `join(separator)` joins an array of strings into a single string, so it's basically the opposite of `split()`.
*/

let strArray = str.split(", ");
console.log(strArray);
console.log(strArray.join(" - "));
// Result: ["Hello", "world!"]
//         Hello - world!

// Searching in Strings
/*
`indexOf(searchValue)` returns the index of the first occurrence of `searchValue`.
*/

console.log(str.indexOf("world"));
// Result: 7

// Template Literals
/*
Template literals are a powerful way to work with strings, especially when you need to include variables or expressions.
*/

let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);
// Result: Hello, Alice!

// Template literals can also span multiple lines.

let multiLine = `This is a string
that spans multiple
lines.`;
console.log(multiLine);
// Result: This is a string
//         that spans multiple
//         lines.
