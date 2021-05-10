//there is no direct operations for string so we first convert it into array


let name='I am Iron Man';


//split=> character

//let strArray=name.split('');  //this gives us each alphabet alone

//let strArray=name.split(';');  //this gives string as array

let strArray=name.split(' ');    //space between ' ' gives each word separately
console.log(strArray);

let biggest=0;
for(let i=0;i<strArray.length;i++){
    if(strArray[i].length>biggest)
    {
        biggest=strArray[i].length;
    }
}
console.log(biggest);

//we can also use slice and splice now


//here 'strArray' is the name of array in which we are storing our output