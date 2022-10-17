{
const prompt = require('prompt-sync')();

var favorite_fruit = ["apple","banana","kiwi"];
var fruit = prompt("Enter your Favourite Fruit");
if (fruit=== favorite_fruit[0]){
    console.log("You Like Apple")
}else if (fruit=== favorite_fruit[1]){
    console.log("You like banana")
}else if (fruit === favorite_fruit[2]){
    console.log("You like kiwi")
}else if (fruit === "mango"){
    console.log("You like mango, But that is not in our list")
}else {
    console.log("Sorry Your fruit is not Available")
}
}