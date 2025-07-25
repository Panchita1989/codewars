function sentence(arrayOfObjects){
    let sortedArr = arrayOfObjects.sort((a,b) => Object.keys(a)[0] - Object.keys(b)[0])
    return sortedArr.map(e => Object.values(e)).join(' ')
}