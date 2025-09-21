function cookie(x){
    let name
    typeof(x) === 'string' ? name = 'Zach':
    typeof(x) === 'number' ? name = 'Monica' : name = 'the dog'

    return `Who ate the last cookie? It was ${name}!`
}