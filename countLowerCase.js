function lowerCaseCount(str){
    let result = 0

    for(let i = 0 ; i < str.length ; i++){
        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
            result += 1
        }
    }
    return result
}