function theWall(name){
    if(name.length <= 2) return [name]

    let letters = name.slice(0, 2)
    return [name, letters]
}