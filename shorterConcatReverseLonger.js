function shorterReverseLonger(a,b){
    if(a.length > b.length || a.length === b.length){
        return `${b}${a.split('').reverse().join('')}${b}`
    }else{
        return `${a}${b.split('').reverse().join('')}${a}`
    }
}