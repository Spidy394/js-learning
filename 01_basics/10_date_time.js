// dates 

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

let myCreatedDate = new Date(2024, 4, 20, 5, 1)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let createDate = new Date("01-31-2023") // mm-dd-yyyy
console.log(createDate.toLocaleDateString())

let myTimeStamp = Date.now() // in mili sec

console.log(myTimeStamp)
console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000)); // convert in sec

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})