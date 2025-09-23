function countResponseTimes(responseTimes){
    let counter = 0
    let currentSum = responseTimes[0]

    if(responseTimes.length === 0) return counter

    for(let i = 1 ; i < responseTimes.length ; i++){
        const average = currentSum/i

        average < responseTimes[i] && counter++
        currentSum += responseTimes[i]
    }

    return counter
}