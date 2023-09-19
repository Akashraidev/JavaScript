const score = 400
console.log("data type of score =  ",typeof score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(3));

const otherNumber = 23.3478578423
console.log(otherNumber.toFixed(2));

console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++Math++++++++++++++++++++

console.log(Math);
console.log("'abs ' stands for absulate value yeh negative value ko +ve mein kr deta hai aur +ve ko +ve hi rhne deat hai",Math.abs(4));
console.log(Math.abs(-4));

console.log(Math.round(4.56));

console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10
const max  = 20
console.log(Math.floor (Math.random() * (max - min +1))+min)