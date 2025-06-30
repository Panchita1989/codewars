function hello(name){
    let newName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
    if(!name || name.length <= 0 ){
        return 'Hello, World!'
    }else{
        return `Hello, ${newName}!`
    }
}