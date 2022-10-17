{
    var guests = ["usama","ahmad","Asad","ali","hamza"];
    guests.splice(3,1,"Ashraf");
    console.log("Hurray we have got Bigger table you all are invited at todays dinner");
    guests.unshift("Aliya");
    guests.splice(3,0,"Fajar");
    guests.push("Aneqa");
    console.log(guests.pop()+" Sorry you are not inivted");
    console.log(guests.pop()+" Sorry you are not inivted");
    console.log(guests);
}