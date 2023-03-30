
let str = 'maddam'

function revString(str) {
   let bag = ''
   for(let i=str.length-1; i>=0; i--){
    bag += str[i]
   }
   return bag
}

let output = revString(str)
// console.log(output)

function checkPalindrome(x,y){
    if(x==y){
        console.log("Palindrome")
    }
    else{
        console.log('Not palindrome')
    }
}

let original_string = str;
let reverse_string = output;

(checkPalindrome(original_string,reverse_string))