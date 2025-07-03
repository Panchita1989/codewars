function gimme(triplet){
    return triplet.findIndex(num => num !== Math.max(...triplet) && num !== Math.min(...triplet))
}