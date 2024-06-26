// Now first things first, you need to understand that there are no `truly` random numbers but rather `pseudo-random` numbers.
// That's because computers are deterministic machines, meaning that they always follow the same rules and produce the same output for the same input.

/*
The core reason why there are no true random numbers in most if not all programming languages
is that they use pseudo-random number generators (PRNGs),
which rely on deterministic algorithms and an initial seed value to produce numbers.
These numbers only appear random but are ultimately predictable if you know the algorithm and the seed.
True randomness, which is completely unpredictable, typically requires hardware-based generators
that rely on physical processes, not just algorithms.
*/

// ## What do we need?
// In order to generate random numbers in JavaScript, we need to use the `Math.random()` function.
// This function returns a pseudo-random number between 0 and 1.

// ### How do we use it?
// Because `Math.random()` returns a number between 0 and 1, we need to use `Math.floor()` to round it down to the nearest whole number.
// On top of that, we can define a range for the random number to be generated in.

// ## Examples
// In most cases you'd want a whole number, so the examples below will use `Math.floor()` to round the random number down to the nearest whole number.

// ### Generate a random number
let randomNumber = Math.floor(Math.random());
console.log(randomNumber);

/*
The `Math.floor()` function is used to round a number down to the nearest whole number.
Because `Math.random()` returns a number between 0 and 1, it'll always result in 0 for this example.
*/

// ### Random number with max value
// In order to do this, we need to multiply the result of `Math.random()` by the `max` value we want the random number to be generated in.
// It is important to note that this multiplication should happen before the `Math.floor()` function is used.

let max = 10;
randomNumber = Math.floor(Math.random() * max);
console.log(randomNumber);

/*
The example will generate a random number between 0 and 9,
because `Math.random()` returns a number between 0 and 1.
*/

// ### Random number with a specific start value
// To make the random number start at a specific value, we can use the `Math.floor()` function again,
// but this time we'll add an `offset` value to the result of `Math.floor()`.

let offset = 1;
randomNumber = Math.floor(Math.random() * max) + offset;
console.log(randomNumber);

/*
This will generate a random number between 1 and 10.
That's because the `offset` value is added to the result of `Math.floor()`,
which as seen above, will always result in a number between 0 and 9.

It is important to understand the order of operations.

1. We get a random number between 0 and 1.
   For example: 0.9528724916378934
2. We multiply this number by the `max` value we want the random number to be generated in.
   For example: 0.9528724916378934 * 10 = 9.528724916378934
3. We round this number down to the nearest whole number.
   This is done to get the correct number.
   If we were to round up, we would get a number that is outside the range we want the random number to be generated in.
   For example: 9.528724916378934 -> 9
4. We add the offset value to the result of `Math.floor()`.
   For example: 9 + 1 = 10

That's why the offset will modify from the default `0-9` to the `1-10` range.
*/

// ### Random number with a specific range
// If we combine what we've learned so far, we can generate a random number between a specific range.
// This is done by multiplying the random number by the difference between the `max` and `min` values, and then adding the `min` value as the `offset`.

// Why do we have to subtract the `min` value from the `max` value?
// That's because we have to take into account, that we are not starting from `1`, but from `min`.

let min = 50;
max = 100;
randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);
