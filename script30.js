var current_users = ["admin","usama","bill","john","ahmad"];
var new_users = ["ali","bilal","qasim","bile"];

var new_lower = new_users.map(element => {
    return element.toLowerCase();
});
var new_upper = new_users.map(element => {
    return element.toUpperCase();
});

var current_lower = current_users.map(element => {
    return element.toLowerCase();
});
var current_upper = current_users.map(element => {
    return element.toUpperCase();
});

if (new_users[0] == current_lower[0] && new_users[0] == current_upper[0]){
    console.log(current_users[0] + " Username is not available")
}else{
    console.log(new_users[0] + "  Username is Available")
};
if (new_users[1] == current_lower[1] && new_users[1] == current_upper[1]){
    console.log(current_users[1] + " Username is not available")
}else{
    console.log(new_users[1] + "  Username is Available")
};
if (new_users[2] == current_lower[2] && new_users[2] == current_upper[2]){
    console.log(current_users[2] + " Username is not available")
}else{
    console.log(new_users[2] + "  Username is Available")
};
if (new_users[3] == current_lower[3] && new_users[3] == current_upper[3]){
    console.log(current_users[3] + " Username is not available")
}else{
    console.log(new_users[3] + "  Username is Available")
};