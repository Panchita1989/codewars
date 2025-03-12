function getSum(a, b){
    if (a === b){
        return a
    }
    let result = 0
    let x = a
    let y = b

    if(a > b){
        x = b 
        y = a
    }
    for(let i = x ; i<= y ; i++){
        result += i
    }
    return result
}
