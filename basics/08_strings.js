const name = "shubho"
const repoCount = 50

// console.log(name + repoCount + " value")

console.log(`Hello may name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shubho-spy-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

const newGameName = gameName.substring(0, 4)
console.log(newGameName);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = " shubho   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://spudi.com/yo%20codeisfun"

console.log(url.replace('%20', '-'))

console.log(url.includes('spu'))

console.log(gameName.split('-'));