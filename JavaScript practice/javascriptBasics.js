let arr4=[100,20,300,40,500,60,700,80,900,60]
function greaterThan200(val){
    return val > 200;
}

function filterExample(){
    let arrfiltered = arr4.filter(greaterThan200)
    console.log(arrfiltered)
}
// Maping in Javascript.
function mapExample(){
  let arrReturn = arr4.map((item)=>{
        return item -10;
    })
    console.log(arrReturn)
 }