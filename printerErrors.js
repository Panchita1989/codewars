function printerError(s) {
    let total = s.length
    let errorCount = 0

    for(let i = 0 ; i<s.length ; i++)
        if(s[i] > 'm'){
            errorCount++
        }
    return errorCount + '/' + total
}