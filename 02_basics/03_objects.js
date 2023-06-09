

//                     OBJECTS IN JAVASCRIPT

// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sami",
    age: 20,
    location: "Jaipur",
    email: "sami@yahoo.com",
    isLoggedIn: false,
    LastLoggedIn: ["Saturday","Monday","Sunday"]
}

// the declared syntax above is known as objects in js 

// console.log(JsUser.email);

console.log([JsUser["email"]]);
console.log(JsUser.email);

// above both methods are ok. but some cases we can't access using dot. so in that case we have to use square braces []

//    for example => 

console.log(JsUser["full name"]);
console.log(JsUser["mySym"]);


JsUser.email = "sami@google.com" // user to change email 
Object.freeze(JsUser); // after using this we will not be able to change details of JsUser

// for example =>
JsUser.email = "sami@microsoft.com" // it will not reflect bcoz we have freeze the valuse of JsUser

console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello, ${this.age}`);
}

console.log(JsUser.greeting);


// access any object through dot or []

