//positive elements
//less than 1000
function las(arr){
    let largest=1;   //constraint is given as positive number only
    let smallest=1001;  //constarint is given less than 1000
    for(let i=0;i<a.length;i++)
    {
        if(arr[i]>largest){
            largest=arr[i];
        }
        if(arr[i]<smallest)
        {
            smallest=arr[i];
        }
    }
    console.log(smallest+" "+largest)
}
let a=[2,5,9,1,11,87];
las(a);