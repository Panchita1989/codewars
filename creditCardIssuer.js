function getIssuer(number){
    let numbers = number.toString()

    if((numbers.startsWith('4')) && (numbers.length === 13 || numbers.length === 16)){
    return 'VISA'
  }else if((numbers.startsWith('34')|| numbers.startsWith('37'))&&(numbers.length === 15)){
    return 'AMEX'
  }else if(numbers.startsWith('6011')&& numbers.length === 16){    
    return 'Discover'
  }else if([51,52,53,54,55].some(prefix => numbers.startsWith(prefix.toString()))&& numbers.length === 16){
    return 'Mastercard'
  }else{
    return 'Unknown'
  }
 
}