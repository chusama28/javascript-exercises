{
    var guests = ["usama","ahmad","Asad","ali","hamza"];
    guests.splice(3,1,"Ashraf");
    guests.unshift("Aliya");
    guests.splice(3,0,"Fajar");
    guests.push("Aneqa");
    console.log(guests.length);
}