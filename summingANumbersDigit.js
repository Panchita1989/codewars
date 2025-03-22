function sumDigits(number){
    let myArr = number.toString().replaceAll('-','').split('').map(Number)
    return myArr.reduce((acc, c) => acc + c)
}