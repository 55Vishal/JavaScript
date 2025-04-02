// Reverse an array
// 1st method
let arr=[1,2,3,4,5]
let newArr = [];
for(let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i)
}
console.log(newArr)
// 2nd method
let arr=[1,2,3,4,5]
let i=0;
let j=arr.length-1;

while(i<j){
    arr[i] = arr[i]+arr[j]
    arr[j] = arr[i]-arr[j]
    arr[i] = arr[i]-arr[j]
    i++;
    j--;
}

console.log(arr)

//String

let arr ="abc";

let newArr = []
for(let i=arr.length-1; i>=0; i--){
   newArr.push(arr[i])
}
console.log(newArr.join(" "))
