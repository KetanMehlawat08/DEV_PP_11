//we want to check if the last character is as given in question or not


function confirmEnding(str, target) {
    let arr=str.split(' '); //split the string into characers and store in array space splits on the basis of words/objects and '' divides each character
    let targetString=arr[arr.length-1]; //index start from 0 so for last character
    let tar=targetString.slice(-target.length); //splice or slice gives the last character eg splice(-2) gives last two charaters same for slice
    
    
    //here target is of length 1 i.e. "n" so that's why we put "-target.length" 
    
    if(tar==target){
      return true;
    }
    else{
      return false;
    }
    }

    confirmEnding("Bastian", "n");


    //Here Bastian is a single item in array so no splitting
