function maximumSubarraySum(arr) {
    let n = arr.length;
    let maxSum = 0;
    let currSum = 0;
  
    for (let i = 0; i < n; i++) {
      currSum = currSum + arr[i];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
      if (currSum < 0) {
        currSum = 0;
      }
    }
  
    return maxSum;
  }
  
  console.log(maximumSubarraySum([5,5,5,5,-5]))


  