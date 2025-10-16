function removeUrlAnchor(url){
    let urlArr = url.split
    let result = ''
    if(!urlArr.includes('#')) return url
    else{
        let index = urlArr.indexOf('#')
        for(let i = 0 ; i < index ; i++){
            index += urlArr[i]
        }
    }
    return result
}