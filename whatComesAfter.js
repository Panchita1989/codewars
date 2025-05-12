function comes_after(str,l) {
  let myStr = str.split('')
  let result = ''
  for (let i = 0 ; i <myStr.length; i++){
    myStr[i] = myStr[i].toLowerCase()
    l = l.toLowerCase()
    if (myStr[i] === l && /^[a-zA-Z]$/.test(myStr[i + 1]) && myStr[i + 1] !== undefined && myStr[i + 1] !== ' ') {
            
          result += myStr[i+1]
      }
  }
  return result
}