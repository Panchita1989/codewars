function arrayDiff(a, b) {
    let newArr = []
    for(let i = 0 ; i < a.length ; i++){
      if(b.indexOf(a[i]) === -1){
        newArr.push(a[i])
      }
    }
    return newArr
  }
