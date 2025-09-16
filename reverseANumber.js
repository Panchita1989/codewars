function reverseNumber(n){
    const sign = Math.sign(n)
    const reversed = Math.abs(n).toString().split('').reverse().join('')

    return sign * Number(reversed)
}