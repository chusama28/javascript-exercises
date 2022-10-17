function sandwich(){
    this.datastore =[];

this.add = function(ingrediants){
   
        this.datastore.push({
            ingrediants
        });
        return this.datastore;
   
}    
}
var sandwich1 = new sandwich();
sandwich1.add("brown bread ,"+" Olives ,"+" chicken ,"+" katchup ");
sandwich1.add("Grilled Cheese ,"+" Olives ,"+" cheese ,"+" Chipottle ");
sandwich1.add("White bread ,"+" Salad ,"+" Egg Sandwich ,"+" Mayo ");

console.log(sandwich1.datastore);