let arr=[1,2,3,4,5,6,7,8,9];
let sub=arr.slice(2);   //create new array from index 2
console.log(sub);

// IMPORTANT !!!!
//slice when used with 'process.argv' is also used to make multiple inputs in form of array

let input=process.argv.slice(2);
console.log(input); 
