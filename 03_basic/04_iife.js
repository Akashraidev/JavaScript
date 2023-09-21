// function chai() {
//     console.log(`DB Connect`);
// }
// chai()

// iffe
// some time we use iffe to avoid global scope variable pollution  

(function chai() {
    console.log(`DB Connect`);
})();   // here ";"  is necessary

// another way

(()=>{
    console.log(`DB conected 2`);
} )()