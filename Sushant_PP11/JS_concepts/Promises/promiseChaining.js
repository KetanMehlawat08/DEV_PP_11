const fs=require("fs")

let f1KaPromise=fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
})
.then(function(){
    console.log("I am after first successfull call back");
});


//this second '.then' is attached to the pending promise of first '.then' that
//means first function execute hone ke baad hi ye execute hoga  first '.then' gives pending promise of f1.





// Sir's notes





// Promises Chaining => To avoid promise hell (promise serial) !

// Initial State is Pending 
// Either the Pending Promise can be resolved or rejected 
// if Pending Promise is Resolved => success callback is invoked
// if Pending Promise is Rejected => failure callback is invoked

// scb (success call back) can be attached to pending promise using then function
// fcb (failure call back) can be attached to pending promises using catch function

// then and catch can only be called on pending promises

// then() and catch() functions are async functions !
// then and catch also returns a pending promise also known as thenKaPromise

const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(f1KaData){
    console.log(f1KaData+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(f2KaData){
    console.log(f2KaData+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise;
})
.then(function(f3KaData){
    console.log(f3KaData+"");
})






// let thenKaPromise = f1KaPromise.then(function(data){
//     console.log(data+"");
//     console.log(f1KaPromise);
// })
// thenKaPromise.then(function(returnValueOfScb1){
//     console.log(returnValueOfScb1);
//     console.log(thenKaPromise);
//     console.log("i ran after first scb !!");
// })
