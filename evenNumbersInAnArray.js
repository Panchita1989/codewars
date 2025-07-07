function evenNumbers(array, number){
    let newArr = array.reverse()
    let result = []
    for(let i = 0 ; i < newArr.length ; i++){
        newArr[i] % 2 && result.push[newArr[i]]
    }
    result.length = number
    return result.reverse()
}