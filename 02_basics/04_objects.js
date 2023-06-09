

// again Objects in Javasript

// const TinderUser = new Object()
const TinderUser = {}  // both works same 

TinderUser.id = "13@abc"
TinderUser.name = "Danish"
TinderUser.isLoggedIn = false

// console.log(TinderUser);

// a simple object formation 

const regularUser = {
    email: "sami@gmail.com",
    fullName:{
        userFullName: {
            firstName: "Sami",
            lastName: "Shaikh"

        }
    }
}

// console.log(regularUser.fullName);


const obj1 = {1:"a", 2: "b"}
const obj2 =  {3:"c", 4:"d"}
const obj3 =  {5:"e", 6:"f"}

// const obj4 = {obj1,obj2,obj3}

const obj4 = Object.assign({}, obj1,obj2,obj3)

// console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3}

// console.log(obj5);

// above logs are to define all values in a place 


const users = [
    {id:1,
    email: "Sami@gmail.com"},
    {id:2,
    email: "Shaikh@gmail.com"},
    {id:3,
    email: "Samiullah@gmail.com"}
]

// console.log(users[0].email);
// console.log(users);


// // console.log(TinderUser);

// console.log(Object.keys(TinderUser));
// console.log(Object.values);
// console.log(Object.entries);

console.log(TinderUser.hasOwnProperty("isLoggedIn")); // its shows if any property is available in the program or not.
// if its not it will say false, if yest then it says => true
// checking hasownpropert is case sensitive. so check its capital and small letters






