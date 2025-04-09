function findEvenIndex(arr){
    let leftSum = 0
    let rightSum = 0
    for(let i = 0 ; i < arr.length; i++){
        leftSum = arr.slice(0,i).reduce((acc, c) => acc + c, 0)
        leftSum = arr.slice(i+1).reduce((acc, c) => acc + c, 0)

        if(leftSum === rightSum){
            return i
        }
    }
    return -1
}