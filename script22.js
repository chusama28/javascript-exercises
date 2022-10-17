{
const prompt = require('prompt-sync')();

const name = prompt(' Enter the name of Car');
const model = prompt(' Enter the model of Car');
const age = prompt('Enter the age of the car');
const rating = prompt('Enter rating of the car')
if (name == "ferrari" && model == 2021 && age <=10 && rating >= 2)
console.log(true)
else 
console.log(false);
}