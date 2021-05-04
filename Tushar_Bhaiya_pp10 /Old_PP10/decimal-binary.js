//function f1(a)
//{
//    while(a>=1){
//        let b=a%2;
//        a=a/2;
//       console.log(b);
//    }
//}
//let value=f1(26);
//console.log(value);
// here problem was converting float to integer also it will print remainder up to down but we want down to up i.e.11010 not 01011

let decimal=26;
function dtb(decimal)
{
    let binary=0;
    let pv=1;//place holder value 1's place, 10's place, 100's place etc
    while(decimal>0)
    {
        console.log(decimal);
        let rem=decimal%2;
        binary=binary+rem*pv
        pv=pv*10;
        decimal=Math.floor(decimal/2);
    }
    return binary;
}
let ans=dtb(decimal);
console.log(ans);