//number 1 to 20, divisible by 3=fizz, 5=buzz, 3&5 both fizzbuzz
for(let a=1;a<=20;a++){
    if(a%3==0 && a%5==0){
        console.log(a,"fizzbuzz");
    }
    if(a%3==0){
        console.log(a,"fizz");
    }
    if(a%5==0){
        console.log(a,"buzz");
    }
}
