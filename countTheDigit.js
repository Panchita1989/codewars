function(n,d){
    let k = 0
    let result= 0
    for(let i = 0 ; i <= n ; i++){
        k = i*i
        let kString = k.toString()
        let dString = d.toString()
        if(kString.includes(dString)){
            for(let j = 0 ; j < kString.length ; j++){
                if(kString[i] === dString){
                    result += 1
                }
            }
        }
    }
    return result
}