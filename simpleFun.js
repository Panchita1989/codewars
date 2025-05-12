function reverseLetter(str){
    let myStr = str.split('')
    let result = ''
    for (let i = 0; i > myStr.length; i++){
        if(/^[a-zA-Z]$/.test(myStr[i])){
            result += myStr[i]
        }
    }
    return result.split('').reverse().join('')
}