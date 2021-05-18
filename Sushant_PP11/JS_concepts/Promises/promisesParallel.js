//parallely read content of f1 f2 and f3 using promisified function

const fs=require("fs");

let f1promise=fs.promises.readFile("./f1.txt");

f1promise.then(function(data){
    console.log(data+"");
});



let f2promise=fs.promises.readFile("./f2.txt");

f2promise.then(function(data){
    console.log(data+"");
});



let f3promise=fs.promises.readFile("./f3.txt");

f3promise.then(function(data){
    console.log(data+"");
});


//it reads data parallely that is all three files at same time so order is not 
//constant all times kabhi f1 pehle print f3 second and f2 third and order will change

/*

ketanmehlawat@Ketans-MacBook-Pro Promises % node promisesParallel.js
Hi I am F3.
Hi I am F1.
Hi I am F2.

this was the output
*/