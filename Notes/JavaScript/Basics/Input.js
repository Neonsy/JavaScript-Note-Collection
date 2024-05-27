// This file demonstrates how to retrieve input from the user in JavaScript.

// Using the `prompt()` function to get input from the user.
const nameFromPrompt = prompt("What is your name?", "John Doe");

// Logging the input received from the prompt to the console.
console.log(nameFromPrompt);

/*
The `prompt()` function is used to get input from the user.
It takes two parameters:
1. The text to display to the user.
2. The default value to display.
If you run the code, the default value is already typed in the textbox.
*/

// Using an HTML textbox to get input from the user (Advanced).

/*
The following code demonstrates how to use an HTML textbox to get input from the user.
To fully grasp how to use it, you'll need to know about:
1. ID's
2. Functions
3. Event listeners
*/

// HTML code (for reference):
/*
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <label id="label" for="name">Your name:</label>
        <br />
        <input type="text" id="name" />
        <br />
        <button id="button">Send</button>
        <script src="input.js"></script>
    </body>
</html>
*/

// JavaScript code to handle the HTML elements:
const label = document.getElementById("label"); // Getting a reference to the label element.
const button = document.getElementById("button"); // Getting a reference to the button element.

// Adding an event listener to the button to handle click events.
button.onclick = function () {
    const name = document.getElementById("name").value; // Getting the value from the textbox.
    label.textContent = `Your name is ${name}`; // Updating the label with the value from the textbox.
};

/*
Explanation of the code:
1. The HTML code features a label, a textbox, and a button.
2. The label displays the text "Your name:".
3. The textbox is used to get the user's name.
4. The button is used to trigger an action when clicked.
5. The JavaScript code gets references to the label and button elements.
6. An `onclick` event listener is added to the button to execute a function when the button is clicked.
7. The function retrieves the value from the textbox and updates the label with this value.
*/

// Note: The HTML part should be included in an HTML file, and the JavaScript part should be included in a separate JS file or within a <script> tag in the HTML file.
