function invert(array){
    if(!Array.isArray(array)){
        return []
    }
    let myArr = array.map(function(element){
        return -element
    })
    return myArr
}

    