function capitals(word){
    const wordArr = word.split('')
    let result = []
    wordArr.forEach((e, i) => e === e.toUpperCase() && result.push(i))
    return result
}