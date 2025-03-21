function points(games){
    let total = 0
    games.forEach(game => {
        let x = game[0]
        let y = game[2]
        if(x > y){
            total += 3
        }else if(x === y){
            total += 1
        }
    })
    return total
}