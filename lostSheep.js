function lostSheep(friday, saturday, total){
    let sum = 0
    for(let i = 0 ; i < friday.length ; i++){
        sum += friday[i]
    }
    for (let i = 0 ; i < saturday.length ; i++){
        sum += saturday[i]
    }
    return total - sum
}