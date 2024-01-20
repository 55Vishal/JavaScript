
function counter(){
    var count = 0;    // This variable is private and can't be used outside the function 
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

