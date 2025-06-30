function findAll(array, n){
    let newArr = []
    array.forEach((num, index)=>num === n && newArr.push(index))

    return newArr
}