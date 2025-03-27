function findSmallestInt(arr){
    let newArr = arr.sort((a, b) => a-b)
    return newArr[0]
}