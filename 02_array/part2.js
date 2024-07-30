const marvelHeros = ['thor', 'ironman', 'spider-man']
const dcHeros = ["superman", "Batman", "flash"]

marvelHeros.push(dcHeros)

console.log(marvelHeros)
console.log(marvelHeros[3][1])

const allHeros = marvelHeros.concat(dcHeros) // marge two arrays 
console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros] // same as concat but multiple arrays can be added at once 
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7 ,[8, 9, [0, 1]]]

const riyalAnotherArr = anotherArr.flat(Infinity)
console.log(riyalAnotherArr); // converts all array inside a array in elements

console.log(Array.isArray("Shubho"))
console.log(Array.from("Shubho"))
console.log(Array.from({name: "shubho"})) // can't convert obj in to array unless specipied wheather to take keys or values, returns []

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3))