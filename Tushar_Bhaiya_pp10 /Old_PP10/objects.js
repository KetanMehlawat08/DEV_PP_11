//let obj={};
//console.log(obj);
//object is key:value pair where key is always string by default so no need to make it a string with ' '
//tony is an object here
//object nesting possible (object ke andar object)
let tony={
      name:"Tony",
      lastName:"Stark",
     friends:['Steve','Bruce','Peter'],   //multiple values}
     age:45,
     isAvenger:'true',
     abc:undefined,
     address:{    //object nesting
         state:'New York',
         city:'Long Island',
     },
     saysHi:function fn()
     {
         console.log('Iron Man says Hello');  //will run when function is called
         return "Part of journey is the end"
     },

}
// console.log(tony); //access whole object
// // to access a value write the key
// //type 1
// console.log(tony.name);
// console.log(tony.friends[2])
// console.log(tony.address.state)
// console.log(tony.saysHi());  //calling saysHi
// //type 2
// console.log(tony['name']);
// console.log(tony['address']['city']);
// console.log(tony['friends'][0]);

let karr=Object.keys(tony);   //shows the keys of tony
console.log(karr)   //print keys
//to print values of keys 

for(let k in tony)  //new type of 'for' loop
{
     console.log(tony[k]);  // (important) if we used console.log(tony.k) i.e.first way to ye tony object mai k dhundta and undefined print kar deta that's why we used second way; this is the difference between both ways
 }
// for(let i=0;i<karr.length;i++){   //old type of 'for' loop
//     //let key=karr[i];
//     //console.log(key);
//     console.log(tony[karr[i]]);
// }