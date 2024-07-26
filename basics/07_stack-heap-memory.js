// Memory are of two types: Stack, Heap

// Stack -> used for Primitive -> gives a copy 
// Heap -> used for Non Primitive / Reference -> gives the reference i.e. any changes will also reflect on original value

let myYoutubeName = "Chai aur code"

let anotherName = myYoutubeName
anotherName = "code with harry"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "xys@gmail.com",
    upi: "xys@ybl"
}

let userTwo = userOne

userTwo.email = "spudi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);