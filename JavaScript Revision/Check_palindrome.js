// [*] Write a function to check if a given string is a valid palindrome with alphanumeric
// characters only

//1 st method

// const a= 'madam';  
// let newArray = [];
// for (let i=a.length-1; i>=0; i--){
//    newArray.push(a[i]);
// }
// // console.log(newArray);
// if(a == newArray.join('')){
//     console.log('true') 
// }else{
//     console.log('false')
// }

// 2nd method
//Check if a valid palindrome with alphanumeric
const a= 'MaDaMe';  

function checkPalindrome(a){
  let str = a.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  let cheStr = str.split('').reverse().join('');

  return str == cheStr
}
console.log(checkPalindrome(a))
