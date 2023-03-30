let k=9
let a = [3,0,6,2,7];

let count = 0;
for(let i=0; i<a.length-1; i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i]+a[j]==k){
            count++
            console.log(a[i],a[j])
        }
    }
}
console.log(count)

