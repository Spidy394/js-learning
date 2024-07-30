// data type is divided into 2 types

// Primitive (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (call by reference) 
// Array, Objects, Functions 
const heros = ["shaktiman", "nagraj", "krish"]

let myObs = {
    name: "shubho",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof heros) // return object
console.log(typeof myObs) // return object
console.log(typeof myFunction) // return funtions (object-function)