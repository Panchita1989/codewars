unction createPhoneNumber(numbers){
    let first = []
    let middle = []
    let end = []
    for(let i = 0 ; i < numbers.length ; i++){
      if(i <= 2){
        first.push(numbers[i])
      }else if(i <= 5){
        middle.push(numbers[i])
      }else{
        end.push(numbers[i])
      }
      
    
      
    }
    return '(' + first.join('') + ')' + ' ' + middle.join('') + '-' + end.join('')
  }