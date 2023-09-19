// Dates 

let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleString())

console.log(myDate.toLocaleDateString())

console.log(typeof myDate);

let myCreatedDate = Date(2023,0,23)

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Date.now());

let newDate  = new Date()
console.log(newDate);
console.log("month =",newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long" 
}));