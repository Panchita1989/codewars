function enough(cap, on, wait){
    let result = cap - on - wait
    if(result > 0){
        retunr 0
    }else{
        return Math.abs(result)
    }
}