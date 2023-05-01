// Map Example :
let MapArr = [45, 23, 21]

let a1 = MapArr.map((value, index, array) => {
    // console.log(value,index,array)
    return value + index
})
console.log('Map output :', a1)

// Filter Example :

let filetrArr = [1, 5, 55, 4, 52, 82, 3, 1, 0]

let a2 = filetrArr.filter((a) => {
    return a < 10
})
console.log('Filter output :', a2)

// Reduce Example :

let reduceArr = [1, 2, 3, 5, 2, 1]
 let a3 = reduceArr.reduce((h1,h2)=>{
    return h1+h2
 })
 console.log('Reduce output :',a3)

 // ForEach Example :
   let arr4 = [1,2,3,4,5]
   let a4 = arr4.forEach((v)=>{
    console.log(v+5)
   })
