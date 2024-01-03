// 27. Write a function to find the second smallest element in an array.

let arr = [12, 34, 10, 6, 40];
function secondMax(arr) {
    let max = 0;
    let smax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            smax = max;
            max = arr[i];
        }
    }

    return smax;
}

console.log(secondMax(arr));
