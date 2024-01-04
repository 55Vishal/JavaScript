// 23. Write a function to reverse the order of words in a sentence without using built-in
// methods.


// let str = 'hello vishal how are you'
// function reverse(){
//     newArr = []
//   for (let i= str.length-1; i>=0; i--){
//     newArr.push(str[i])
    
//   }
//   return newArr.join('');
// }
// console.log(reverse(str))

const a= 'hello vishal how are you';
function reverse(a){
  const b= a.split(' ')
  
  let rev= ''
  for(let i=b.length-1; i>=0; i--){
     rev += b[i] + ' '
  }
  return rev
}
console.log(reverse(a))

