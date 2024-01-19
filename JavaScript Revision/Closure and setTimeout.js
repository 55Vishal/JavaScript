
function x(){
    var a = 1;
    setTimeout(function(){
     console.log('First function o/p:',a);
    },3000);
}
x();

// Create a function that iterates through the loop from 1 to 5 and prints then within specific interval

function i(){
    for(let i=1; i<=5; i++){
        setTimeout(function (){
        console.log('Second function o/p :',i)
        },3000 * i);
    }
}
i();