//splice modifies array 
let arr=[1,2,3,4,5,6];
//slice gives sub array
//splice insertion bhi deta hai
arr.splice(1,3,8,9,10);
//1 to 3 index par replace kar dega 8,9,10
console.log(arr);
let b=arr.splice(-2); //gives last two objects
console.log(b);
