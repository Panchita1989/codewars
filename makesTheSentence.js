function makesTheSentence(charArray, senString){
    let charSentence = charArray.sort()
    let senSentence = senString.replaceAll(' ', '').split('').sort()

    if(charSentence.length !== senSentence.length) return false

    for(let i = 0 ; i <charSentence.length ; i++){
        if(charSentence[i] !== senSentence[i]) return false
    }
    return true
}