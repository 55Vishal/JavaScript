// Pair of a largest sum.

let arr=[12,34,10,6,40]

let sum =0;
arr.sort(function(a,b){return a-b})
sum=arr[arr.length-1]+arr[arr.length-2]

console.log(sum)

let sums = 0;
arr.sort(function(a,b){
    return a-b;
})

sums = arr[arr.length-1] + arr[arr.length-2]
console.log(sums)