function solve(a,b){
    let result = ''
    let aString = a.split('')
    let bString = b.split('')

    aString.forEach(letter => {
        if(bString.indexOf(letter)=== -1){
            result += letter
        }       
})
    bString.forEach(letter => {
        if(aString.indexOf(letter)=== -1){
            result += letter
        }       
    })
    return result   
}