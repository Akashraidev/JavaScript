// "this" keyword used to refer current object

const user = {
    username: "akash",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
      console.log(this);
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()
user.username = "Aman"
user.welcomemessage()

console.log(this);

function another(){
    let usernames = "Akash"
    console.log(this);
    console.log(this.usernames);  // undefined
}
another()


//

// const chai = function(){
//     let username  = "Akash"
//     console.log(this.username); // undefined
// }
// chai()

// arrow fun

const chai =() => {
    let username  = "Akash"
    console.log(this); // undefined
}
chai()

// basic arrow fun

// const addtwo = (n1,n2) => {
//     return n1+n2
// }
// console.log("addtwo: ",addtwo(4,5))


// const addtwo = (n1,n2) =>  n1+n2
// console.log("addtwo: ",addtwo(4,5))

// const addtwo = (n1,n2) =>  (n1+n2)
// console.log("addtwo: ",addtwo(4,5))

// obj return

// const addtwo = (n1,n2) =>  ({username:"akash"})
// console.log("addtwo: ",addtwo(4,5))



 
