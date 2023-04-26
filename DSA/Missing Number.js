//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let nums = [3, 0, 1, 2, 5];
let desiredSum = 0;
let currentSum = 0;

for (let i = 0; i <= nums.length; i++) {
    desiredSum += i;
    // console.log(desiredSum)
    if (i < nums.length) {
        currentSum += nums[i];
        // console.log(currentSum)
    }
}
console.log(desiredSum - currentSum);

