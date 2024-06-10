/*
In JavaScript, there is an `object` called `Math` that provides a set of helpful mathematical functions. 
This `Math` object is available everywhere in your code, so you can use it anytime you need to perform a mathematical operation.
The `Math` object is part of the global `scope`, meaning you can access its functions and properties from anywhere in your code.
The `Math` object allows you to use functions and properties using the `.` operator, also known as the `dot notation`.
Don't worry if terms like `object` and `scope` are unfamiliar; we'll cover them in more detail later.
*/

/*
The following is an overview of the most commonly used functions and properties of the `Math` object.
If some of these mathematical concepts are new to you, don't worry. We'll focus on the most useful ones to get you started.
**#LearningMathAsRequired**
*/

/*
Syntax

In order to understand the examples, you should know how to access the `Math` object and its functions and properties.

ObjectName.propertyName // To access a property
ObjectName.functionName() // To call a function
*/

/*
Mathematical Constants

Math.PI

- Description: Represents the ratio of the circumference of a circle to its diameter. Useful for calculating the area of a circle.
- Value: Approximately 3.14159.
- Example:
*/
console.log(Math.PI); // 3.141592653589793

/*
There are other constants like `Math.E` or `Math.LOG10E`, but they can be more advanced. 
For more details, you can check [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/).
*/

/*
Mathematical Methods

Basic Arithmetic

Math.abs(x)

- Description: Returns the absolute value of a number, always a positive value.
- Example:
*/
console.log(Math.abs(-5)); // 5

/*
Math.sign(x)

- Description: Returns the sign of the number (1 for positive, -1 for negative, 0 for zero).
- Example:
*/
console.log(Math.sign(-8)); // -1

/*
Rounding

Math.ceil(x)

- Description: Rounds a number upward to its nearest integer.
- Example:
*/
console.log(Math.ceil(4.2)); // 5

/*
Math.floor(x)

- Description: Rounds a number downward to its nearest integer.
- Example:
*/
console.log(Math.floor(4.8)); // 4

/*
Math.round(x)

- Description: Rounds a number to the nearest integer.
- Example:
*/
console.log(Math.round(4.5)); // 5

/*
Math.trunc(x)

- Description: Returns the integer part of a number by removing any fractional digits.
- Example:
*/
console.log(Math.trunc(4.9)); // 4

/*
Power and Roots

Math.pow(x, y)

- Description: Returns the base to the exponent power, that is, base^exponent.
- Example:
*/
console.log(Math.pow(2, 3)); // 8

/*
Math.sqrt(x)

- Description: Returns the square root of a number.
- Example:
*/
console.log(Math.sqrt(9)); // 3

/*
Trigonometry

Math.sin(x)

- Description: Returns the sine of a number (x is in radians).
- Example:
*/
console.log(Math.sin(Math.PI / 2)); // 1

/*
Math.cos(x)

- Description: Returns the cosine of a number (x is in radians).
- Example:
*/
console.log(Math.cos(Math.PI)); // -1

/*
Math.tan(x)

- Description: Returns the tangent of a number (x is in radians).
- Example:
*/
console.log(Math.tan(Math.PI / 4)); // 1

/*
Utility Methods

Math.max(values)

- Description: Returns the largest of the zero or more numbers given as input parameters.
- Example:
*/
console.log(Math.max(1, 3, 2)); // 3

/*
Math.min(values)

- Description: Returns the smallest of the zero or more numbers given as input parameters.
- Example:
*/
console.log(Math.min(1, 3, 2)); // 1

/*
Math.random()

- Description: Returns a pseudo-random number between 0 and 1.
- Example:
*/
console.log(Math.random()); // e.g., 0.123456789
