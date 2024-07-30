// rest opereator
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Shubho",
    price: 199
}

function handlObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handlObject(user)
handlObject({
    username: "Spudi",
    price: 299
})

const myNewArray = [200, 400, 100, 300]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([12, 32, 45, 65]));
