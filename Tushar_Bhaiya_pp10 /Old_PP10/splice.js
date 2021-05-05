// 1. splice modifies array and create new array, no change in original array
let arr=[1,2,3,4,5,6];


// 2. slice gives sub array
// 3. splice in addition to slice insertion bhi deta hai


arr.splice(1,3,8,9,10);
//1 to 3 index par replace kar dega 8,9,10
console.log(arr);


let b=arr.splice(-2); //gives last two objects & -1 will give last object of array
console.log(b);

// some things are common in slice and splice



arr.splice(2,0,10,11,12,13); 
// 4. in this it won't delete any item from array but enter 10-13 a position 2
console.log(arr);