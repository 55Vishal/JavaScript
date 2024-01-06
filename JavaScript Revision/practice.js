function checkPrime(num){
    for (let i=0; i<=num; i++){
        let count=0;
        for(let j=0; j<=i; j++){
            if(i%j == 0){
                count++;
            }
        }
        if(count == 2){
            console.log(i,':Is prime')
        }else{
         console.log(i,':Not prime')
        }
    }
}
console.log(checkPrime(15))