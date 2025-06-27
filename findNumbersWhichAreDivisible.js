function divisibleBy(numbers, divisor){
    let result = []

    numbers.map(n => n % divisor && result.push(n))

    return result
}