function or(a,b){
    return !a && !b ? false : true 
}
function xor(a,b){
    if(a&&!b) return true
    else if(!a && b) return true
    else return false
}