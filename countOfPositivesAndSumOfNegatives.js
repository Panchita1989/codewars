function countPositivesSumNegatives(input){
    let sumPositives = 0
    let sumNegatives = 0 
    
    if(!input || input.length === 0 )

    input.forEach(e => {
        if(e < 0){
            sumNegatives += e
        }else if(e > 0){
            sumPositives ++
        }
    })
    return [sumPositives, sumNegatives]
}