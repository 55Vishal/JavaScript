// Currying in JavaScript.

// Example 1:

function add (a) {
    return function(b){
      return a + b;
    }
  }
  
 console.log(add(3)(4)) 

// Example 2:

 function add(a){
    return function(b){
        return a+b
    }
 }
 console.log(add(5)(5))