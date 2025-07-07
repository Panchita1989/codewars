function mergeArrays(arr1 , arr2){
    let newArr = [...new Set([...arr1, ...arr2])]
    return newArr.sort((a, b) => a - b)
}