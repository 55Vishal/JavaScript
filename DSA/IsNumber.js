// Check if the variable is Number or String;
let x='5'
if(typeof x=='number' && !isNaN(x)){
    console.log('Is Integer')
}else{
    console.log('Not a Integer');
}

// Check if the variable is Integer or Not.
function checkInt(inp){
    let pattern=/^-?[0-9]+$/;
    let result=pattern.test(inp)
    return result
}
console.log(checkInt('Ram'))
