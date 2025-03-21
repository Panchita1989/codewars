function duplicateEncode(word){
    return word.toLowerCase().split('')
    .map((current, indexe, arr) => arr.indexOf(current) === arr.lastIndexOf(current) ? '(' : ')').join('')
}