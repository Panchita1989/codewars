function missingWord(nums, str){
    let newStr = str.replaceAll(' ', '')
    let newNums = nums.sort((a,b)=> a-b)
    let result = ''

    newNums.forEach(e => result + newStr.charAt(e))
    return result.length < newNums.length ? 'No mission today' : result.toLowerCase()
}