// Datatypes.js
// Learn about the different data types in JavaScript.

/**
 * JavaScript has a variety of data types that can be categorized into two main groups:
 * - Primitives
 * - Complex / Reference types
 */

/**
 * Primitive Data Types
 * Primitive data types are the most basic data types in JavaScript.
 * They are immutable, meaning their values cannot be changed once created.
 *
 * Note: This applies when using `const`, because `let` lets you still reassign a value.
 * You can read more about it here: /JavaScript-Note-Collection/references/const-vs-let/
 */

// Undefined
// The `undefined` data type is used to represent a value that is undefined.
// In essence, that means a variable has been declared but has not received a value yet.
// Think of it as an empty box that hasn't been filled with anything.
let x;
console.log(x); // Output: undefined

// Null
// The `null` data type is used to represent a value that is, well... null.
// In other words, it represents the intentional absence of any value, or at least it should be signaling that.
let y = null;
console.log(y); // Output: null

// Boolean
// The `boolean` data type is used to represent a value that is either `true` or `false`.
// It's like a light switch that can either be on or off.
// An expression in JavaScript that evaluates to `true` is called a `truthy` expression, while one that evaluates to `false` is called a `falsy` expression.
// What qualifies as an expression? A piece of code that produces a value.
let isTrue = true;
let isFalse = false;

// Number
// The `number` data type is used to represent a value that is a number.
// While that does sound self-explanatory, it's important to note that it can be either a `float` or an `integer`.
// Note: JavaScript does not differentiate between different types of numbers, so you can use the same type for whole numbers and decimal ones.
let integer = 42;
let float = 3.14;

// BigInt
// The `bigint` data type is used for whole numbers larger than what the `Number` type can safely represent.
// You create a BigInt by appending `n` to the end of an integer.
let bigInt = 1234567890123456789012345678901234567890n;

// String
// The `string` data type is used to represent a sequence of characters used to represent text.
// You can create strings by enclosing characters in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).
// Backticks are especially useful when you are working with variables.
// You can use them to enclose a variable name and then reference it inside the backticks.
// This is referred to as template literals.
let singleQuoteString = "Hello";
let doubleQuoteString = "World";
let templateLiteral = `Hello, ${doubleQuoteString}`;

// Symbol
// Symbols represent a unique and immutable value that can be used as the key of an object property.
// They are created using the `Symbol()` function.
// Key Points:
// - Uniqueness: Each symbol is unique. Even if two symbols have the same description, they are different.
// - Use Case: Symbols are useful for creating unique property keys, especially in scenarios where you want to avoid property name collisions.
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // Output: false

// Note: The triple equals sign (`===`) is used to check if two values are equal. This will be covered in a later section.

/**
 * Complex (Reference) Data Types
 * Complex data types are used to store collections of data and more complex entities.
 * They are mutable, meaning they can be modified after creation.
 *
 * Note: I will go over most of these data types in detail, in their own sections.
 * This section only serves as a broad overview of the different data types.
 */

// Object
// `Objects` are a collection of key-value pairs.
// They can store properties (`data`) and methods (`functions`).
let obj = {
    name: "Devin",
    age: 36,
    greet: function () {
        console.log("Hello");
    },
};

// Array
// `Arrays` are a collection of values.
// They are similar to objects, but they are not key-value pairs.
// However, they are a special type of object.
let arr = [1, 2, 3, 4, 5];

// Function
// `Functions` are a special type of object that can be called to perform a task.
// They are defined using the `function` keyword or arrow syntax (`=>`).
function greet() {
    console.log("Hello");
}

let greetArrow = () => {
    console.log("Hello");
};

// Date
// The `Date` object is used to represent a specific date and time.
// They are created using the `Date` constructor.
let now = new Date();

// RegExp
// Regular expressions are used to represent a pattern of characters, representing a regular expression, which is used for pattern matching within strings.
let regex = /ab+c/;

// Map
// A `map` represents a collection of key-value pairs where keys can be of any data type.
// They are created using the `Map` constructor.
let map = new Map();
map.set("key", "value");

// Set
// `Sets` represent a collection of unique values.
// They are created using the `Set` constructor.
let set = new Set([1, 2, 3, 4, 5]);

// WeakMap
// A `WeakMap` is similar to a `Map`, but keys must be objects and they are weakly referenced, meaning they can be garbage collected if there are no other references to the object.
let weakMap = new WeakMap();
let obj2 = {};
weakMap.set(obj2, "value");

// WeakSet
// In the same sense, a `WeakSet` is similar to `Set`, but values must be objects and they are weakly referenced as well.
let weakSet = new WeakSet();
let obj3 = {};
weakSet.add(obj3);

// Promise
// A `Promise` represents the eventual completion, or failure, of an asynchronous operation and its resulting value.
// Promises are used to handle asynchronous operations in JavaScript.
let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
});
