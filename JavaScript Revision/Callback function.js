// When a function is passed into another function, this process is called as "Callback function"

setTimeout( function(){
console.log('Timer')
},5000);

function x(y){
    console.log('X')
    y();
}
x(function y(){
    console.log('Y')
});