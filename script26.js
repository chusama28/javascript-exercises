{
const prompt = require('prompt-sync')();

var age = prompt("Enter your Age");

if(age <= 2){ 
console.log("You are a Baby")
} else if (age >= 3 && age <= 4){
    console.log("You are a Toddler")
} else if (age >=5 && age <= 13){
    console.log ("You are Kid")
} else if (age >=14 && age <=20){
    console.log("You are a teenager")
} else if(age >=21 && age <=65){
    console.log("You are Adult") 
} else {
    console.log( "You are Elder")
}
}