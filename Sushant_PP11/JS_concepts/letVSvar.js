//1. //let => block scoped variable (limited to block in which it is declared)

//2. // var => global scope

//3. // const => block scoped variable

//4. //hoisiting happens in both let and var but in case of let we cannot access
    // becuse a is in temporal deadzone and gives can't access before declaration
    // node js don't show deadzone region, javascript shows deadzone
    
    //Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration



/*console.log(a);
let a="Steve"; */
// gives error (cannot print before initialization as we used "let" )




//console.log(a)   it gives not defined



/*console.log(a);
var a="Steve"; */
//gives undefined




/*console.log(a);   //gives undefined as we used "var" not "let"
var a="Roger";
console.log(a); */  //gives Roger






var a=20;
console.log(a);   //prints 20

if(true){
    var a=50;    //changes value of var to 50 even out of loop
    console.log(a);  //prints 50
}

function callMe(){
    console.log(a);  //undefined coz ye apne function mai dekh rha hai
    var a=100;
    console.log("Inside call me");
    console.log(a);   // prints 100 as this is for function
}
callMe();

console.log(a);   //prints 50 as this is bahar ka 'a' not function's 'a'