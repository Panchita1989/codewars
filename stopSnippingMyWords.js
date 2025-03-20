function spinWords(string){
    let myArr = string.split(' ')
    let myStr = myArr.map(function(word){
        if(word.length >= 5){
            return word.split('').reverse().join('')
        }else{
            return word
        }
    })
    return myStr.join(' ').toString()
}