// Rotate the array by k=3

function reverse(arr,i,j){
    
    while(i<j){
        arr[i]= arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++ 
        j--
    }
    return arr
}
let arr=[1,2,3,4,5,6,7];
let k=3;

arr=reverse(arr,0,k)
console.log(arr)