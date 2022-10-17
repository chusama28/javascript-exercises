const magicians = ['Peter', 'James', 'Luis'];
function make_great(){
magicians.forEach((element, index) => {
  magicians[index] = "The Great " + magicians;
});
return magicians;
}
console.log(make_great());