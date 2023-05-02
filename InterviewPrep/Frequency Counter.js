// Find the frequency of each element in the array.

let arr = [7, 2, 7, 7, 3, 4, 2]

let obj = {};

for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (obj[elem] == undefined) {
        obj[elem] = 1;
    }
    else {
        obj[elem]++
    }
}

for (let key in obj) {
    console.log(key + '-' + obj[key]);
}