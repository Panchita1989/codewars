function countPositivesSumNegatives(input){
    let total = 0
    let opposite = 0
    let result[]
    input.forEach(element => {
        element < 0 ? opposite+=element : element > 0 ? total+=1 : null
    });
    result.push(total)
    result.push(opposite)
    return result
}