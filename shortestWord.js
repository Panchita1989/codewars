function findShort(s){
    let str = s.split(' ')
    let total = str[0].length

    for(let i = 0 ; i < str.length ; i++){
        if((str[i].length < total) && (str[i] !== ' ')){
            total = str[i].length
        }
    }
    return total
}