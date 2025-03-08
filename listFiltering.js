function filter_list(l){
    let newArr = []
    l.filter(x => typeof(x) == 'number' ? newArr.push(x) : false)
    return newArr
}