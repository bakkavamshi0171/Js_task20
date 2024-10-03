// call method
function introduce(greeting, location){
    console.log(greeting + " this is " + this.name + " i am from " + location );

}
let person1= {
    name : "vamshi"
}
introduce.call(person1, "Hello", "Hyderabad");

// apply method
function introduce(greeting, location){
    console.log(greeting + " this is " + this.name + " i am from " + location );
}
let person2= {
    name : "vamshi",
}
introduce.apply(person2, ["Hello", "Hyderabad"]);


// bind method
function introduce(greeting, location){
    console.log(greeting + " this is " + this.name + " i am from " + location );

}
let person3= {
    name : "vamshi"
}
let bind = introduce.bind(person3, "Hello", "Hyderabad" );
bind();
