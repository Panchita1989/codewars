function ballCollector(detritus){
    let sack={
        weight: 0
    }
    detritus.forEach(element => element === 58 ? sack.weight += element : null)
    return sack
}