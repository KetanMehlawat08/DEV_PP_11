//print promise output in order i.e. f1,f2,f3

//kaafi bekaar code ho gya so we use chaining to prevent this

const fs=require("fs");

let f1promise=fs.promises.readFile("f1.txt");

f1promise.then(function(data){
    console.log(data+"");

    f2promise=fs.promises.readFile("f2.txt");

    f2promise.then(function(data){
        console.log(data+"");

        f3promise=fs.promises.readFile("./f3.txt");

        f3promise.then(function(data){
            console.log(data+"");
        });
    });
});


/*

ketanmehlawat@Ketans-MacBook-Pro Promises % node promiseSerial.js   
Hi I am F1.
Hi I am F2.
Hi I am F3.

*/




// By chaining


const fs=require("fs");

let f1promise=fs.promises.readFile("./f1.txt");

f1promise.then(function(f1KaData){
    console.log(f1KaData+"");
    let f2promise=fs.promises.readFile("f2.txt");
    return f2promise;

})
.then(function(f2KaData){
    console.log(f2KaData+"");
    let f3promise=fs.promises.readFile("f3.txt");
    return f3promise;
})
.then(function(f3kaData){
    console.log(f3kaData+"");
})



/*

ketanmehlawat@Ketans-MacBook-Pro Promises % node promiseSerial.js  
Hi I am F1.
Hi I am F2.
Hi I am F3.

*/