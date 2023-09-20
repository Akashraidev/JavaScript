// concatinate two array
const marevel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marevel_heros.push(dc_heros)
console.log(marevel_heros);

console.log(marevel_heros[2]); //spiderman
console.log(marevel_heros[1]); //Ironman
console.log(marevel_heros[3]);  //[ 'superman', 'flash', 'batman' ]
console.log(marevel_heros[3][1]); //flash

 // another way concatinate

 marevel_heros.concat(dc_heros)
 console.log(marevel_heros);

 // spread operator
console.log("*****spread operator*****");
 const all_new_heros = [...marevel_heros,...dc_heros]
 console.log(all_new_heros);

 const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
 const realanother_array =another_array.flat(Infinity)

 console.log(realanother_array);

 console.log("here we are check Aksh is 'Array' or not",Array.isArray("Akash"))
console.log("strig ko array bna dega",Array.from("Akash"));

let scroe1 = 100
let scroe2 = 200
let scroe3 = 300

console.log(Array.of(scroe1,scroe2,scroe3));

