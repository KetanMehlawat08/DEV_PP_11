//we want to check if the last character is as given in question or not
function confirmEnding(str, target) {
    let arr=str.split(' '); //split the string into characers and store in array
    let targetString=arr[arr.length-1]; //index start from 0 so for last character
    let tar=targetString.slice(-target.length); //splice or slice gives the last character eg splice(-2) gives last two charaters same for slice
    if(tar==target){
      return true;
    }
    else{
      return false;
    }
    }

    confirmEnding("Bastian", "n");