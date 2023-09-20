// In js obj are declare in 2 ways
//1st - literal
//2st -  constructor [Object.create]

// object literals
// here "name,age,email,location,isLogged" are "key" and it is a string

const mysyml = Symbol("keys1")

const JSuser = {
    name: "Akash Rai",
    [mysyml]: "MyKey",
    age: 19,
    location: "Jaipir",
    email:"aksh@google.com",
    isLogged:false,
    lastLoginDays:["Monday","Saturaday"]
}
//how to access object
//1st
console.log(JSuser);
//2nd
console.log(JSuser.email);
console.log(JSuser["email"]);

//************ */
console.log(JSuser.mysyml)
console.log("type of =",typeof JSuser.mysyml)

console.log(JSuser[mysyml])

// how to change obj value

JSuser.email = "Javascript@gmail.com"
console.log("after changed the value of email =",JSuser["email"]);
console.log(JSuser);

// if we want to no one of can the value of email then we should freez the value
Object.freeze(JSuser)
// now we are try to change the value
JSuser.email ="ABC@gmail.com"

console.log(JSuser);

// we add function in obj

JSuser.greeting = function(){
    console.log("Hello js user i'm function");
}
console.log(JSuser.greeting);