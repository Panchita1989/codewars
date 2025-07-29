function validSpacing(s) {
    let newS = s.split('')
    let signe = ''

    if(newS[0] === ' ' || newS[newS.length-1] === ' '){
        return false
    }

    for (let i = 0; i < newS.length; i++) {
        if(signe === ' ' && newS[i] === ' ') {
            return false
        }       
        signe = newS[i]
    }
    return true
}