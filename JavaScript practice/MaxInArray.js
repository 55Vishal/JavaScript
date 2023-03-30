//Maximum in the array.

let marks=[15,22,30,8,40,55];

let pad = -Infinity;
for(let i=0; i<marks.length; i++){
  if(marks[i]>pad){
    pad=marks[i]
  }
}
console.log(pad)