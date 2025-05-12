function avarage(scores){
    let total = scores.reduce((acc, score) => acc + score, 0)
    let average = total / scores.length
    return Math.round(average)
}