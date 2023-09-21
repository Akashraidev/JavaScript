//  let a = 10
//  const b = 20
//  var c = 30

//  console.log(a);
//  console.log(b);
//  console.log(c);
 
// scope
// let a= 200

//  if (true) {
//     // local scope
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("Inner : ",a);
//  }
//  console.log(a);
//  console.log(b);
//  console.log(c);

function one(){
    const username ="Rajiv"

    function two (){
        const website ="Youtube"
        console.log("username:",username);
    }
    //console.log(website);
  two()
}
one()


if (true) {
    const username = "Akash"
    if (username === "Akash") {
        const website = " youtube"
        console.log(username + website);
    }
     // console.log(website);  // eroor because variable website scope 
}
// console.log(username);



//********************************* */
function addone(num){
    return num + 1
}

console.log(addone(4));

// another way of to declare a function
const addTwo = function(num){
    return num + 2
}