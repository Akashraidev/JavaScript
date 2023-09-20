// array
const myArr = [ 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "Hatim"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

 myArr.push(6)
 console.log(myArr)

 myArr.push(7) 
 console.log(myArr)

myArr.pop()  // pop method remove last element
console.log(myArr)

 myArr.unshift(9)   //  0 index place pe 9 aayega aur 
 console.log(myArr)

// myArr.shift()

 console.log("include method check krega 9 hai ki nhi array mein ",myArr.includes(9));
 console.log(myArr.indexOf(3));

 const newArr = myArr.join()

console.log(myArr);
console.log( newArr);
console.log(typeof newArr);


// slice, splice

 console.log("A ", myArr);

 const myn1 = myArr.slice(1, 3)

 console.log(myn1);

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
// console.log("C ", myArr);
// console.log(myn2);
