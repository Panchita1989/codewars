function arraySum(arr){
    let sum = 0
    let flat = arr.flat(Infinity)
    for(let i = 0 ; i < flat.length ; i++){
        if(typeof(flat[i]) === 'number'){
            sum += flat[i]
        }
    }
    return sum
}
