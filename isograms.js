function isIsogram(str){
    let myStr = str.toLowerCase().split('').sort()
    let result = ''
    for(let i = 0 ; i < myStr.length ; i++){
        if(myStr[i] === result){
            return false
        }else{
            result = myStr[i]
        }
    }
    return true
}