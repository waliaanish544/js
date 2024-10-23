// singleton 

// object literals
// Object.create //constructor method

const mySym = Symbol("key1")

const jsUser ={
    name: "Anish",
    "full name" :"anish walia",
    age : 18,
    [mySym]:"myKey1",
    locatin: "himachal",
    email: "dlp.com",
    isLoggedIn: false,
    LastLoginDays: ["monday","satrurday"]
}
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log( jsUser[mySym])

jsUser.email = "anish@gmail.com"
Object.freeze ="anish@google.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`helllo js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());