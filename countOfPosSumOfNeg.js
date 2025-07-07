function countPositivesSumNegatives(input){
    let resultPos = 0
    let resultNeg = 0
    let result = []
    for(let i = 0 ; i < input.length ; i++){
        input[i] > 0 ? resultPos++ : resultNeg += input[i]
    }
    if(resultPos > 0 && resultNeg < 0){
        result.push(resultPos, resultNeg)
        return result
    }else{
        
        return result
    }
   
   
}