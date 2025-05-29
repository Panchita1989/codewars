function calculate(str){
    let expression = str.replaceAll('plus', '+').replaceAll('minus', '-')
    let result = eval(expression)
    return result.toString()
}



