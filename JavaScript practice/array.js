let arr = [100, 20, 651, 400, 500, 600, 700, 550, 30, 80];

function greaterThan200() {
    return val > 200;
}
function filterExample() {
    let arrFiltered = arr.filter(greaterThan200)
    console.log(arrFiltered)
}