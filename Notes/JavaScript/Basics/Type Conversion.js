/*
Type conversion in JavaScript is all about changing a value from one type to another.
It can happen either because you explicitly asked for it or because JavaScript decided to do it behind the scenes.

If you need a refresher on the datatypes, we can look them up in the JavaScript Basics documentation.
*/

/*
Explicit Type Conversion

When you explicitly convert types, you're in control. Here's how you do it:
*/

// To a String
/*
Use the `String()` function to turn a value into a string.
*/

String(123); // Result: "123"
String(true); // Result: "true"

// To a Number
/*
Use the `Number()` function to change a value into a number.

As you can see, if something cannot be converted to a number, it will return `NaN`.
*/

Number("123"); // Result: 123
Number("123abc"); // Result: NaN

// To a Boolean
/*
Use the `Boolean()` function to convert a value to a boolean.

It is important to note that `Boolean()` will return `true` for any value that is not `0` or `false`.
*/

Boolean(1); // Result: true
Boolean(0); // Result: false

/*
Implicit Type Conversion

Implicit type conversion happens automatically and can sometimes be surprising. Here are some common situations:
*/

// String Concatenation with `+` Operator
/*
When you use `+` with a string and another type, JavaScript converts the other type to a string.
*/

"The answer is " + 42; // Result: "The answer is 42"

// Numeric Conversion in Arithmetic Operations
/*
Operations like `-`, `*`, and `/` convert values to numbers.
*/

"5" - 2; // Result: 3
"5" * 2; // Result: 10