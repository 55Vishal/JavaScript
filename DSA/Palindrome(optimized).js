// Check wethere the given number id palindrome or not.

  function isPalindrome(x){
    
    return x===+x.toString().split('').reverse().join('')
  }
let res = isPalindrome(121)
  console.log(res)
  