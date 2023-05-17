//Write a function that takes an array of integers as input and returns the largest difference between any two elements in the array.

arr = [1, 45, 300, 2, 10, 23, 78]

let max = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i] 
}
}
console.log(max)
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i] 
}
}
console.log(min)
console.log(max-min)

let result = arr.sort(function (a, b) {return a-b})
console.log(result)
