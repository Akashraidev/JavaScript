let index = 0
while (index <=10) {
    //console.log(`value of idex is ${index}`);
    console.log("value of index is " + index);
    // both line are same
    index = index+2
}

let myArray = ['flash','batman','superman']
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    //console.log(`value is ${myArray}`);
    arr +=1
}


// do while
console.log('*****do while loop******');
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);