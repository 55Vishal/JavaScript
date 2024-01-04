// Pair of a largest sum.

let arr=[10,20,30,40,50]

let sum = 0;

arr.sort(function(a,b){
    return a-b;
})

sum = arr[arr.length-1] + arr[arr.length-2];
console.log('Sum of largest pairs:',sum)