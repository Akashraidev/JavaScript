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

// object Destructuring and JSON API

console.log("+++++++object Destructuring+++++");

const course = {
    courseName: "JS in hindi",
    price:"399",
    courseInstructor:" courseInstructor Akash Rai "
}

// console.log(course.courseInstructor);


// if we want or required to access courseInstructor many time 
// then you will write  'course.courseInstructor' many time 
// to reduce this redunadancy we shall use another method

// const {courseInstructor} = course // with the help of this method we can reduce the "key name" lenght
// console.log(courseInstructor);  //courseInstructor Akash Rai 
// console.log(courseInstructor);   //courseInstructor Akash Rai 

// reduce

const {courseInstructor:instr} = course
console.log(instr);  // courseInstructor Akash Rai 
console.log(instr);   //courseInstructor Akash Rai 

// JSON => is JS object notation

{
    name: "Akash",
    courseNames = "JS in hindi",
    pricee = "free"
}