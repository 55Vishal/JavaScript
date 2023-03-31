// Pair of a First, Second and Third largest sum.

let arr = [12, 34, 10, 6, 40]

let max=0;
let smax=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        smax=max;
        max=arr[i]
    }
    else if(arr[i]>smax){
        smax=arr[i]
    }
}
sum=max+smax
console.log(sum)