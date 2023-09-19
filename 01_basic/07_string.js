const name = "Akash"
const repoCount = 50

 console.log(name + repoCount + " Value");

 console.log("************************");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akash-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log("upper Case",gameName.toUpperCase());
 console.log("charAt use check whopresent at specific posintion= ",gameName.charAt(2));
 console.log("indexOf use to check char postion =",gameName.indexOf('h'));

 const newString = gameName.substring(0, 4)
console.log("string 0 se 4 tk ke hi word print kregi",newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString)

const newStringOne = "   Akash    "
console.log(newStringOne);
console.log("trin() methosd staring aur end space remoc=ve kr deta hai ",newStringOne.trim());

 const url = "https://akash.com/akash%20rai"
console.log(url.replace('%20', '-'))

console.log(" 'url.include' se check kr skte hai url me koi speific naam hai ki nhi ",url.includes('sundar'))

 console.log(gameName.split('-'));