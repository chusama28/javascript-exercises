function make_album() {
    this.datastore = [];

this.add = function (artist,title,number){
    if(artist && title && number){
        this.datastore.push({
            artist: artist,
            title: title,
            number: number
        });
        return this.datastore;
    }
};
}
var dictionary1 = new make_album();
dictionary1.add("Ali","dc", 2);
dictionary1.add("Atif","ac",1);

console.log(dictionary1.datastore);