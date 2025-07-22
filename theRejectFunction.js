function reject(array, predicate){
    let result = []
    array.forEach(e => !predicate(e) && result.push(e))

    return result
}