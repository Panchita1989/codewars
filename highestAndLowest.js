function highAndLow(numbers){
    let myNums = numbers.split(' ').map(Number)
    let max = Math.max(...myNums)
    let min = Math.min(...myNums)
    return `${max} ${min}`
}