function solve(a){
    let numbers = a.filter(n => typeof(n)=== 'number')
    let evens = numbers.filter(n => n % 2 === 0)
    let odds = numbers.filter(n => n % 2 !== 0) 

    return evens.length - odds.length
}