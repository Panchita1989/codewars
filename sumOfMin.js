function sumOfMinimums(arr){
    let minArr = []
    arr.forEach(e => minArr.push(Math.min(...e)))
    return minArr.reduce((a, b) => a + b, 0)
}