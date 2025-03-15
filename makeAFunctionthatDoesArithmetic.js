function arithmetic(a, b, operator){
    let oper = operator.toLowercase()
    if(oper === 'add'){
        return a+b
      }else if(oper === 'subtract'){
        return a - b
      }else if(oper === 'multiply'){
        return a * b
      }else if(oper === 'divide'){
        return a / b
      }
}