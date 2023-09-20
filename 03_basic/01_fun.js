// console.log("a");
// console.log("k");
// console.log("a");
// console.log("s");
// console.log("h");

//****************** */
// fun definition

function sayMyName(){
console.log("a");
console.log("k");
console.log("a");
console.log("s");
console.log("h");    
}

// sayMyName()


function addTwoNum(num1,num2) { //num1,num2 parameter
    console.log("sum of two num",num1+num2);
}
addTwoNum(3,7)   //function call // 3,7 are arguments
addTwoNum(3,"a")  // 3,"a" are arguments
addTwoNum(3,null)

const result = addTwoNum(8,4)
console.log("result = ",result); //result= undefined 
// solution=

function sumTwoNum(num1,num2) { //num1,num2 parameter
    let results = num1+num2
    return results
    //or
    // return num1+num2
   // console.log("Akash");
}
const results = sumTwoNum(8,4)
console.log("result = ",results);


console.log("********************");

function loginUserMsg(username) {
    if (username === undefined ) {
        console.log("please enter username");
        return
    }
    return`${username} just logged in`
    }

   //console.log(loginUserMsg("Akash Rai")); 
   console.log(loginUserMsg()); 


   console.log("When who knows how many argument will come then according to situation we create our parameters");
   
   // When who knows how many argument will come then according to situation 
   //we create our parameters

//    function calculateCartPrice(...num) {
//     return num
//    }
//    console.log(calculateCartPrice(200,400,500,300));


   function calculateCartPrice(val1,val2,...num) {
    return num
   }
   console.log(calculateCartPrice(200,400,500,300));


const user = {
    username: "Raman",
    price:199
}
function HandleObject(anyObject) {
    console.log(`user name is ${anyObject.username} and 
    price is ${anyObject.price}`);    
}
//HandleObject(user)

// or

HandleObject(
    {
        username:"SAM",
        price:399
    }
)

const myNewArr = [200,300,100,600]
function returnsecondValue(getArray){
    return getArray[1]
}
// console.log(returnsecondValue(myNewArr));  // 300
// or
console.log(returnsecondValue([200,300,100,600])); //300

