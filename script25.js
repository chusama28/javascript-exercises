{
const prompt = require('prompt-sync')();
var color = prompt("Enter the color of the Alien ");

if(color == "green")
console.log ("You have earned 5 Points")
else if (color == "yellow")
console.log ("You have earned 10 Points")
else if (color == "red")
console.log ("You have earned 15 Points")
else 
console.log (" Wrong Color :No Kill")
}