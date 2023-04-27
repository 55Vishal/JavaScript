// Find the frequency using has map.

let arr = [1,2,7,3,4,2,1];
var mp =  new Map();

for(let i = 0; i < arr.length; i++){
    let x=arr[i];
    if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
    }
    else{
    mp.set(x,1)    
    }
}

mp.forEach((value,key)=>{
    console.log('key: '+key+' value: '+value)
})