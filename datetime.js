
// //dated
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023-03-11)
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());
let newDate =new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());``
// ${newDate.getDate()}
newDate.toLocaleString('default',{
    weekday: "long"
})
