function arrayPlusArray(arr1, arr2){
    let totalArr = [...arr1, ...arr2]

    return totalArr.reduce((acc, c) => acc + c, 0)
}