function countSheep(sheeps){
    let counter = 0
    sheeps.forEach(x => {
        if(x === true){
            counter+=1
        }
    })
    return counter
}