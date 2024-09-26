//Primitive Datatype

//7 types: string,number,boolean,null,undefined,symbol,bigint

//javascript is a 

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userNullEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
const bigNumber = 3333333n
console.log(bigNumber)
const heros =["iron man","hulk","strange","antman"]
let myObj= {
    name:"anish",
    age:2,
}         
const myFunction= 
function(){
    console.log("hello world" );
}
console.log(typeof myFunction);

// refrence type datatype
//refrence(non primitive)
 // arrays,objects,functions
// the datatype for the non primitive is function
//return of function is objectFunction



//++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap Memory(non-primitive)
//when anything goes under heap memory then we get refrence
// and during stack memory we get a copy of the original value

let myYoutubename ="anish.com"
let anotherName = myYoutubename
anothername ="walia.com"
console.log(myYoutubename);
console.log(anothername);
//basics of js
let userOne={
    email: "anish@gmail.com",
    upi: "user@okaxis",
}

let userTwo = userOne
userTwo.email = "anish@outlook.com"
console.log(userOne.email);
console.log(userTwo.email);