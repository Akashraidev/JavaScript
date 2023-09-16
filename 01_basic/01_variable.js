const accountId = 144423
let accountEmail = "akash@gmailcom"
var accountPassword = "12345"
accountCity = "Jaipur"


accountEmail ="ar@gmail.com"
accountPassword = "4444"
accountCity = "Agra"    //In jS we can define a variabble without define their type

let accountState;  // In js if we declare a variable without any value then js consider as 'undefined'

// accountId = 2323   Throws an error because constant cannot be changed
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  // it is a another way to print multiple variable 

// variable can define using two keyword 'let' and 'var' but.....but we do not use 'var' because of 'Scope' reason
/*
prefer not  to use var
because of issue in block cope and functional scope
*/