let k = 9;
arr = [2,5,3,6,7,1]

n = arr.length
let count = 0;
for(let i=0; i<n-1; i++){
  for(let j=i+1; j<=n-1; j++){
    if(arr[i]+arr[j]==k){
      count++
    console.log(arr[i],arr[j] ,'=',arr[i]+arr[j])

    }
  }
}
  console.log(count)