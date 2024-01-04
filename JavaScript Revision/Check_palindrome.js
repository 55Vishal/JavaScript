// . Write a function to check if a given string is a valid palindrome with alphanumeric
// characters only

const a= 'MadaM';  

function checkPallindrom(a){
    let str = a.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    let checkStr = str.split('').reverse().join('')
    return str === checkStr
}

console.log(checkPallindrom(a));