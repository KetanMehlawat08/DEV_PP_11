//print smalles and largest index value of 1 in array
function ind(arr){
    let smallest=0;
    let largest=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){   //can use while loop too
            largest=i;
            continue
        }
    }
    for(let j=arr.length-1;j>=0;j--){
        if(arr[j]==1){
            smallest=j;
            continue
        }
    }
    console.log("smallest index value of 1 is "+smallest+" and "+"largest index value of 1 is "+largest)
}
let a=[2,3,4,1,5,4,3,11,1,3,1,7,6,1,1,1,1,1,8,9,1];
ind(a);