const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["Batman", "Spider-man"]

const myArr2 = new Array(2, 4, 6, 8)

// methods 

myArr.push(6) // adds value
console.log(myArr) 

myArr.pop() // removes the last value 
console.log(myArr) 

myArr.unshift(9) // addes value in the beginings 
console.log(myArr)

myArr.shift() // removes the first element
console.log(myArr)


console.log(myArr.includes(9));
console.log(myArr.indexOf(3)); // returns -1 if value does not exists in array

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // adds exesting array and turn them into string 

// slice , splice 
console.log("A", myArr)

const myn1 = myArr.slice(1, 3) // does not change the original array only makes a copy of elements in the range (excluding the upper range index)

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3) // changes the original array by removing the specified range and storing them (includes the uppper range index element)
console.log("C", myArr)
console.log(myn2);