//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.



var romanToInt = function(s) {
    let sym={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let result = 0
    for (let i=0;i<s.length; i++){
        const curr = sym[s[i]]
        const next = sym[s[i+1]]
        if(next>curr){
            result+= next-curr;
            i++
        }else{
            result+=curr
        }
        console.log(result)
    }
    // return result
    console.log(result)
 };