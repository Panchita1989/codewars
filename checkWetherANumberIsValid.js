function validateBase(num, base){
    const myNum = num.toUpperCase().split('')
    const validCharts = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base)

    return myNum.every(char => validCharts.includes(char))
}