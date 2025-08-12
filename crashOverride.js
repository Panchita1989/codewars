function aliasGen(first, last){
    let firstLetter = first.split('')[0].toUpperCase()
    let lastLetter = last.split('')[0].toUpperCase()

    if(!/[a-z]/i.test(firstLetter) || !/[a-z]/i.test(lastLetter)){
        return 'Your name must start with a letter from A - Z.'
    }

    return `${firstName[firstLetter]} ${surname[lastLetter]}`
}