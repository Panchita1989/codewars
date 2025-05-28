function magicSum(numbers){
    let result = 0
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i].toString().includes('3')&& numbers[i] % 2 !== 0){
            result +=numbers[i]
        }
    }
    return result
}