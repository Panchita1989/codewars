function capMe(names){
    let result  = names.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    return result
}