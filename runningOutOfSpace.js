function spacey(array){
    let myArr = []
    let solution = ''
    array.forEach(element => {
        myArr.push(solution += element)
    });
    return myArr
}