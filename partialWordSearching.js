function wordSearch(query, seq){
    let result = seq.filter(element => element.toLowerCase().includes(query.toLowerCase()))
    return result.length > 0 ? result : ['Empty']
}