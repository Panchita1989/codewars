function isSquare(n){
    let root = Math.sqrt(n)
    if(root === Math.floor(root)){
        return true
    }
    else{
        return false
    }
}