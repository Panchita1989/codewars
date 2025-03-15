function XO(str){
    let a = 0
    let b = 0
    let newStr = str.split('').map(char => char.toLowerCase())

    for(let i = 0 ; i < newStr.length ; i++){
        if(newStr[i] === 'o'){
            a += 1
        }else if(newStr[i] === 'x'){
            b += 1
        }
    }
    return a === b ? true : false
}