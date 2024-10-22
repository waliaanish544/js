const name= "hitesh"
const repocount = 50

//console.log(name+ repocount +"value")
//strign interpolations
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('anish-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " anish ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20co"
console.log(url.replace('%20' , '--'));
console.log(url.includes('anish'));

console.log(gameName.split('-'));