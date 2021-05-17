//Sync=Synchronously; all commands are synchronus


/*javascript ke andar whenever we want to use any inbuilt library or module
we use "require" keyword */

let fs=require('fs');

//here we want to access all internal libraries of "fs"
// fs is a file system "module" provided by node js which help us to access file system of our system


let data=fs.readFileSync('abc.txt');

/* console.log(data);   it gives data in form of buffer so convert it to string */ 

console.log(data.toString());




let wdata='Hi I am Ketan.';
fs.writeFileSync('write.txt',wdata);

//write wdata in write.txt


//append data in existing file

fs.appendFileSync('write.txt','\tI am 21 years old.')

fs.appendFileSync('write.txt','\nThis is appended data');

// \n writes data in new line similarly \t gives space

//fs.writeFileSync('write.txt','hi')  this will erase old data and write this


fs.unlinkSync('abc.txt');
// deletes the file

