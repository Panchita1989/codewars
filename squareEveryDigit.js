function squareDigits (num) {
  let result = ''
  let numStr = num.toString()
  for(let i = 0 ; i < numStr.length ; i++){
    let square = numStr[i] * numStr[i]
    result += square
  }
  return parseInt(result)
}
   