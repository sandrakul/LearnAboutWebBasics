// 4. Represent all this in an Objects
let person = {
    name: "Name",
    age: 99,
    isAdult: true,
    colors: ["red", "blue", "green"]
}

// 1a. Variables are containers for storing data values.
// Try to use const, then let, then var
w = 7; // Automatically Set
var x = 8; // Can be changed, but for OLD BROWSERS
let y = 9; // Can be changed, but for NEW BROWSERS
const z = 10; // Cannot be changed

// 1b Experiment with the different variable notations. 
document.getElementById("demo").innerHTML = w;

// 2. Data Types
// Strings
let name = "Name"; // strings are text
// Numbers
let age = 99; // numbers can be integers or floats
// Booleans
let isAdult = true; // booleans are true or false
// Arrays
let colors = ["red", "blue", "green"]; // arrays are lists

// 2a. Using multiple variables
document.getElementById("info").innerHTML = "Hello my name is: " + person.name + " and I am " + person.age + " years old.";

// 3. Change the color of the info tag
// 3a. setInterval is a function that runs a function every x milliseconds
// 3b. Use Arrow Functions
let i = 0;
setInterval(() => {
    if (i === colors.length) {
        i = 0;
    }
    document.getElementById("info").style.color = colors[i];
    i++;
}, 1000);

// 5. Display date when we click button using event handlers
function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

// 6. List your projects in an object
let projects = {
    project1: {
        name: "Project 1",
        description: "Description 1",
        link: "https://www.google.com",
    },
}

// 6a. Display the projects in a list
let projectList = document.getElementById("projects");
for (let project in projects) {
    let li = document.createElement("li");
    li.innerHTML = projects[project].name;
    projectList.appendChild(li);
}