let score = "69a"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN -> not a number 

// "69" => 69
// "69a" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "shubho" => true

let someNumber = 2004

let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber);
