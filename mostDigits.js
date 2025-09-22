function mostDigits(array){
    let longest = array[0]

    array.forEach(e => {
        if(e.toString().length > longest.toString().length){
            longest = e
        }
    })

    return longest
}