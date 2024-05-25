/*
 * Number Operators
 * Learn how to use number operators for arithmetic in JavaScript.
 */

/*
 * Basic Operators
 * Here is a quick rundown of all the basic operators you'll need to know for arithmetic in JavaScript.
 * Try to guess the output before you look at it or run the code.
 */

// Addition (+)
// The addition operator adds two numbers together.
// It's like combining two ingredients to make a delicious recipe!

let sum = 5 + 3;
console.log(sum); // Output: 8

// Subtraction (-)
// The subtraction operator subtracts one number from another.
// Think of it as taking away a piece of a pie.

let difference = 10 - 4;
console.log(difference); // Output: 6

// Multiplication (*)
// The multiplication operator multiplies two numbers.
// It's like doubling a recipe to serve more people.

let product = 7 * 6;
console.log(product); // Output: 42

// Division (/)
// The division operator divides one number by another.
// Imagine slicing a pizza into equal parts.

let quotient = 20 / 4;
console.log(quotient); // Output: 5

/*
 * Extra Operators
 */

// Modulus (%)
// The modulus operator returns the remainder of a division operation.
// It's like finding out how many pieces are left after sharing equally.

let remainder = 10 % 3;
console.log(remainder); // Output: 1

// Exponent (**)
// The exponentiation operator raises the first number to the power of the second number.
// It's like multiplying a number by itself several times over.

let power = 2 ** 3;
console.log(power); // Output: 8

/*
 * Increment and Decrement
 * There are two types of increment and decrement operators:
 * - Pre-in/decrement: Uses the value after, then increases/decreases it.
 * - Post-in/decrement: Uses the value first, then increases/decreases it.
 */

/*
 * Note: Chances are, that you'll see the post increment operator more often.
 * This is because it's easier to read, especially on a larger codebase.
 * However, the pre increment operator is also useful, so don't be afraid to use it.
 */

// Increment (++)
// The increment operator increases a number by one.
// - Pre-Increment (`++x`): Increases the value before using it.
// - Post-Increment (`x++`): Uses the value first, then increases it.

let x = 5;
console.log(++x); // Output: 6 (Pre-Increment)
console.log(x++); // Output: 6 (Post-Increment, but x becomes 7 after this line is done executing)
console.log(x);   // Output: 7 (x is 7 after this line)

// Decrement (--)
// The decrement operator decreases a number by one. There are the same two types as well
// - Pre-Decrement (`--x`): Decreases the value before using it.
// - Post-Decrement (`x--`): Uses the value first, then decreases it.

let y = 5;
console.log(--y); // Output: 4 (Pre-Decrement)
console.log(y--); // Output: 4 (Post-Decrement, but y becomes 3 after this line is done executing)
console.log(y);   // Output: 3 (y is 3 after this line)

/*
 * Order of Operations
 * Just like in math, you can use parentheses to control the order of operations in your code:
 */

// Without parentheses
console.log(2 + 3 * 5); // Output: 17

// With parentheses
console.log((2 + 3) * 5); // Output: 25

/*
 * Order of Operands
 * 1. Parentheses `()`
 * 2. Exponents `**`
 * 3. Multiplication `*`, Division `/`, and Modulus `%`
 * 4. Addition `+` and Subtraction `-`
 */

/*
 * Note: The order of execution is the same as the order of operations. 
 * Operators with the same precedence/priority are executed from left to right.
 */

// With these operators, you can perform a variety of mathematical operations in JavaScript.
// Whether you're adding, subtracting, multiplying, or dividing, these tools will help you manipulate numbers with ease and make your code more dynamic and powerful!
