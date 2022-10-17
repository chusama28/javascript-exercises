const prompt = require('prompt-sync')();

var username = ["admin","eric","usama","paul","mike"];
var login = prompt(" Enter you username ");

if (login == username[0]){
    console.log("Hello " + login + " would you like to see a status report?")
}else {
    console.log("Hello "+ login + " thank you for logging in again.")
}