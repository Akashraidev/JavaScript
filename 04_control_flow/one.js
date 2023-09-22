// if statement

if (true) {
    console.log("true");
}

const isUserloggedIn = true

if (isUserloggedIn) {
    console.log("TRUE");
}

if (2!=3) {
    console.log("excuted");
}

const temp = 41
if (temp < 50) {
    console.log("less than 50");
}
console.log("greater than 50");

const score = 200
if (score>100) {
    const power = "fly"
    console.log(`user power : ${power}`);
} 
//console.log(`user power : ${power}`); 

const balance = 1000
//if (balance>500) console.log("test");

if (balance < 500) {
        console.log("less than 500");
    } else if (balance < 750) {
       console.log("less than 750");
        
    } else if (balance < 900) {
         console.log("less than 750");
        
     } else {
       console.log("less than 1200");
    
 }

 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}