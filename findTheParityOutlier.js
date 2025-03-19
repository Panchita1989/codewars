function findOutlier(integers){
    let arr = integers
    let odds = []
    let evens = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        }else{
            odds.push(arr[i])
        }
    }
    if(odds.length < evens.length){
        return odds[0]
    }else{
        return evens[0]
    }
}