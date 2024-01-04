// 27. Write a function to find the second smallest element in an array.

let arr = [12, 34, 10, 6, 40];
function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
  console.log(findMax(arr))   


let max = 0;
let smax = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i]
    }
}

console.log('1 max', max)
console.log('2 max', smax)