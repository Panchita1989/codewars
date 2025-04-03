function explode(x){
    let newArr =[]
    if(typeof(x[0]) !== 'number' && typeof(x[1]) !== 'number'){
      return 'Void!'
    }else if(typeof(x[0]) !== 'number'){
        for(let i = 1 ; i <= x[1] ; i++){
            newArr.push(x)
        }
    }else if(typeof(x[1]) !== 'number'){
        for(let i = 1 ; i <= x[0] ; i++){
            newArr.push(x)
        }
    }else{
        for(let i = 1 ; i <= x[0] + x[1] ; i++){
            newArr.push(x)
    }
  }
  return newArr

}