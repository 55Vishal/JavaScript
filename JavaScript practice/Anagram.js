// Anagram //
//str1= vishal , 
//str2= lashiv,

// conditions
// str1.length=str2.length
// str1.char=str2.char
// objA={v:0,i:0,s:0,h:0,a:0,l:0} // no of times of letters in strings is called freq
// objB={l:1,a:1,s:1,h:1,i:1,v:1}  //--1

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let obj = {};
    for (let letter of str1) {
        obj[letter] = (obj[letter] || 0) + 1;
        // console.log(obj[letter])
    }
    console.log(obj)
    for (let j of str2) {
        if (!obj[j]) {
            return false
        }
        obj[j] -= 1;
    }
    return true;
}
const result = isAnagram("vishal", "lashiv");
console.log(result)
