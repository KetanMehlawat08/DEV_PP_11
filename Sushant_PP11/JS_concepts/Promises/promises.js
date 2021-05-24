const fs=require("fs");

let pendingPromise=fs.promises.readFile('f1.txt');

console.log(pendingPromise);


// then function attaches a success callback to the pendingPromise
pendingPromise.then(function(data){
    console.log('Inside then(success)')
    console.log(data+"")

});


//catch function attaches a failure callback to the pendingPromise

pendingPromise.catch(function(error){
    console.log('Inside catch(failure)')
    console.log(error);
});

//necessary to write 'data' and 'error' in 'then' and 'catch