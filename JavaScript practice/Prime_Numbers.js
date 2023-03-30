// Find Prime numbers to given limit

for(let i=0; i<=50; i++){
    let count = 0;
    for(let j=0; j<=i; j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i,'Prime number')
    }
    else{
        console.log(i,'Not a prime number')
    }
}
