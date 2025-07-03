function number(array){
    let result = []
    array.forEach((e, i)=> {
        result.push(`${i + 1}: ${e}`)
    })
}