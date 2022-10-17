
{
const prompt = require('prompt-sync')();

var alien_color = "green";

var color = prompt("Enter the color");
if(alien_color == color)
console.log("you have earned 5 Points");
else 
console.log("you have just earned 10 Points");
}