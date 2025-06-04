function numberToPowr(number, power){
    return number ** power
}

function numberToPower(number, power){
    let result = 1
    for (let i = 0 ; i < power ; i++){
        result *= number
    }
    return result
}