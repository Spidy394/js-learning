const tinderUser = new Object() // singleton object

tinderUser.id = "21abc"
tinderUser.name = "Jammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubhodeep",
            lastname: "mondal"
        }
    }
}

console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = Object.assign({}, obj1, obj2) 

const obj3 = {...obj1, ...obj2}
console.log(obj1);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    }
]
users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));