// Rotate An Array by k=3; ans = [5,6,7,1,2,3,4]

function rotate(arr, i, j) {

    while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++;
        j--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7]
let k = 3;

arr = rotate(arr, 0, arr.length - 1)

arr = rotate(arr, 0, k - 1)

arr = rotate(arr, k, arr.length - 1)

console.log(arr);