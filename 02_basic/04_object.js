// singalton or constructor

const tinderUser = new Object()
// console.log(tinderUser);
// // or 
//  tinderUser = {}
// console.log(tinderUser);

 tinderUser.id ="123abc"
 tinderUser.name ="Sammy"
 tinderUser.isloggedIN = false
 // console.log(tinderUser);

 const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userFullname:{
            firstName:"Akash",
            lastName:"Rai"
        }
    }
 }

 console.log(regularUser.fullname.userFullname.firstName)

 const obje1 = {
    1:"a",
    2:"b",
 }
 const obje2 = {
    3:"a",
    4:"b",
 }

 //const obj3 = {obje1,obje2}
//  console.log(obj3);

// const  obje3 = Object.assign({},obje1,obje2)
//  console.log(obje3)
 
// spread 

const obje3 = {...obje1,...obje2}
console.log(obje3);

const user = [
    {
    id:1,
    email:"abcd@gmail.com"
    },
    {
        
    },
    {

    }
]
user[1].email

console.log(tinderUser);
console.log("keys");
console.log(Object.keys(tinderUser));
console.log("Value");
console.log(Object.values(tinderUser));
console.log("Enteries");
console.log(Object.entries(tinderUser));  // array ke andr array ho jata hai  , har ek key value ko array mein bna dia jata hai 

console.log(tinderUser.hasOwnProperty('islogged'))  // false