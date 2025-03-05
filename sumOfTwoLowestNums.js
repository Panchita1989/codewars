function sumTwoSmallestNumbers (numbers){
    let result = 0
    let newNum = numbers.sort(compareNumbers)

    result = newNum[0] + newNum[1]

    return result

    function compareNumbers(a, b){
        return a - b
    }
}