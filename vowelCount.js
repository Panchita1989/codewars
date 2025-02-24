function getCount(str){
    let newStr = str.split('')
    let result = 0
    newStr.map((x) => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' ? result+=1:0)
    return result
}