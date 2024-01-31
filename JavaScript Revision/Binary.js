const arr = [5, 1, 3, 2, 6]

function binary (x){
  return x.toString(2);
}
// 1st method
const output1  = arr.map(binary);
console.log('output1',output1);

// 2st method

const output2  = arr.map(function binary (x){
    return x.toString(2);
  });
console.log('output2',output2);

// 3st method

const output3 = arr.map((x) => x.toString(2))
console.log('output3',output3);
