// Check if the variable is Integer or Not.

function checkInt(inp){
    let pattern=/^-?[0-9]+$/;
    let result=pattern.test(inp)
    return result
}
console.log(checkInt('Ram'))
