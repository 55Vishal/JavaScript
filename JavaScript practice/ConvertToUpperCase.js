// Convert from lower case to upper case char;

let char = 'a';

let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

let upper = ['A','B','C','D','E','F','G','H','I'];


for(let i=0; i<lower.length; i++){
  if(char === lower[i]){
    console.log(upper[i]);
  }
}


