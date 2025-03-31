function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let myArr = string.toLowerCase().split('')
    for(let char of alphabet){
        if(!myArr.includes(char)){
            return false
        }
    }
    return true
}