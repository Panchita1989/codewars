function capitalize(string, indices){
    const newString = string.split('')
    let result = []
    for (let i = 0 ; i < newString.length ; i++){
        indices.includes(i) ? result.push(newString[i].toUpperCase()) : result.push(newString[i])
    }
    return result.join('')
}