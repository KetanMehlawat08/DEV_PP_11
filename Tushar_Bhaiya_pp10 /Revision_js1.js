// 1. Take input from user

// let input=process.argv[2];
//  console.log(input);


//2. using of user input in function


function inp(num)
{
    console.log(parseInt(num)+2);   
    /*parseInt changes a string into integer as console.log
     gives output in format of string and num+2 
     will give 102 for input 10 so we used brackets*/
}
let input=process.argv[2];
inp(input);


// 3. splice

