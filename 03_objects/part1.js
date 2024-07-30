// singleton -> literals ❌ ; constructors ✅
// Object.create

// object literials 

const mySym = Symbol("Key1")

const jsUser = {
    name: "Shubho",
    "full name": "Shubhodeep Mondal",
    [mySym]: "mykey1",
    age: 19,
    location: "Kolkata",
    email: "xyz@gmail.com",
    isLoggedIn: true,
    lastLogInDays: ["Monday", "Friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "spudi@gpt.com"
// Object.freeze(jsUser)
jsUser.email = "spudi@fb.com"

console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello js user");
}

jsUser.greetingtwo = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting); 
console.log(jsUser.greeting()); 
console.log(jsUser.greetingtwo()); 

