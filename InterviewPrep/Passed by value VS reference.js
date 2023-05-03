// // Passed by value and Passed by reference.

// Passed by value.
var x=20;
var y=x

var x=x+5

console.log(x,y)

// Passed by reference.

var obj1 = {name : 'Akash' , surname : 'Roi'}
var obj2 = obj1

obj1.name= 'Rohan'
console.log('obj1 :',obj1,'obj2 :', obj2)

