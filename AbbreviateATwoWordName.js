function abbrevName(name){
    let myArr = name.toUpperCase().split(' ')
    return myArr[0][0] + '.' + myArr[1][0]
}