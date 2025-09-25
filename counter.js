function createCounter(n){
    let start = n

    return function(){
        let current = start
        start += 1

        return current
    }
}