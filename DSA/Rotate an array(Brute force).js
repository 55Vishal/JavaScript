// Rotate the array by k=3 (Brute force);

// 1st Method
let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 3;

for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop())
}
console.log(arr)


