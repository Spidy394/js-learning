function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(33, 63)
console.log("Result:", result);

function loginUserMessage(username = "spudi") {
    if(!username) {
        return "Please enter a username"
    }
    else{
        return `${username} just logged in`
    }
}

console.log(loginUserMessage("shubho"));
console.log(loginUserMessage());