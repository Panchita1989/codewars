function capitalsFirst(str){
    let words = str.split(' ')
    let onlyWords = words.filter(w => /^[a-zA-Z]/.test(w));
    let upper = onlyWords.filter(w => w[0] === w[0].toUpperCase())
    let min = onlyWords.filter(w => w[0] === w[0].toLowerCase())

    return upper.concat(min).join(' ')
}