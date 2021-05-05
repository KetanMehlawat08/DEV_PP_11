let arr=[1,2,3,4,5,6,7,8,9];
let sub=arr.slice(2);   //create new array from index 2
console.log(sub);

//OR !!!

let arr2=[1,2,3,4,5,6,7,8,9];
let sub2=arr.slice(2,5);   //create new array from index 2 to 5(5 not included)
console.log(sub2);



// IMPORTANT !!!!
//slice when used with 'process.argv' is also used to make multiple inputs in form of array

let input=process.argv.slice(2);  //2 removes those two lines of file destination
console.log(input); 


/*ketanmehlawat@Ketans-MacBook-Pro Old_PP10 % node slice.js 10 20 30 40
[
  '/usr/local/bin/node',
  '/Users/ketanmehlawat/Documents/DEV_PP_11/Tushar_Bhaiya_pp10 /Old_PP10/slice.js',
  '10',
  '20',
  '30',
  '40'
]
*/