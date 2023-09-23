// for of

// ["", "", ""]   // array 
// [{}, {}, {}]  // object under array => {}

const arr = [1, 2, 3, 4, 5]
console.log("use of 'for of' loop");
for (const num of arr) {
    
    console.log(num);
}

// ' for of ' on String
console.log("' for of ' on String");

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// The Map object holds key-value pairs and remembers 
//the original insertion order of the keys. Any value 
//(both objects and primitive values) may be used as either a key or a value.

// Maps - for understanding we can  assume that map is like array, we will learn futher chapter

const map = new Map()
map.set('IN', "India")   // IN is key and India is value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // india will print only one time  
// so map in js is know for unique value
console.log(map);


for (const key of map) {
    // console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// for of loop on object
console.log("*******'for of'loop on object");

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
//     }  // throw error -TypeError: myObject is not iterable
