function sumArray(array){
    if(!Array.isArray(array) || array.lenght <= 2) return 0
    else{
        let sortedArr = array.sort((a, b) => a-b).slice(1, -1)
        return sortedArr.reduce((acc, c) => acc + c, 0)
    }
}