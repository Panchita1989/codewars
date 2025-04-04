function scrollingText(text){
    let result = []
    for(let i = 0 ; i < text.length ; i++){
        result.push(text.slice(i).toUpperCase() + text.slice(0,i).toUpperCase())
    }
}