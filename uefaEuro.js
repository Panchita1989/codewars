function uefaEuro(teams, scores){
    let winner = scores[0] > scores[1] ? teams[0] : teams[1]
    if(scores[0] === scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }else{
        return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
    }
}

