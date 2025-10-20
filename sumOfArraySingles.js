function repeats(arr) {
    let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index)
    let unique = arr.filter(item => !duplicates.includes(item))

    return unique.reduce((a,b) => a + b, 0)
    
}