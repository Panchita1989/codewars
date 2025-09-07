function array(string){
    let arr = string.split(',')
    if(arr.length < 3) return null
    arr.pop()
    arr.shift()

    return arr.join(' ')
}