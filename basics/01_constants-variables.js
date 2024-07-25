// const -> constant

/*
there are two ways to declare variables in js , "let" and "var" 
but prefer not to use var, coz of issuse in block scope and funtions scope
*/

const accountId = 1445534
let accountEmail = "spidyisthebest09@gmail.com"
var accountPassword = "521542"
accountCity = "Kolkata" // a variable will also be creates if some value is assigain to a word

let accountState; // if no value is given to a variable then it's default value will be "undefined"

// accountId = 2  not allowed 

accountEmail = "sm@sm.com"
accountPassword = "232321"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);