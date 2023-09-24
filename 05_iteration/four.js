const myObject = {
    js:'JavaScript',
    Cpp:'c++',
    rb:'ruby',
    swift:' swift by apple'
}

for (const key in myObject) {
   // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]


// for in loop
console.log("***************");
for (const key in programming) {
   //console.log(key);
    console.log(programming[key]);
}

//**************************** */
console.log("****************");
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
// map is not iterable like in this way we can but diff way