// closure is a function bundled along with its  lexical scope 
// for being a closure function should be nested i.e. function ke andar function

//closure is inner function is accessing outer function's object and any
// later change in that object makes changes is already defined inner function


var name="Steve";

function fun(){
    var b=20;
    console.log(name);
    function y(){    //nested function
        console.log(b);   //first its 20 then when b changes to 100 it will print 100
    }
    b=100;
    return y;
}


name="roger";  //change name in "fun" function from steve to roger bcoz this is before calling the function

var newFun=fun();  //newfun is now a function that calls fun();
newFun();

name="Robert";  //doesn't change in "fun" function