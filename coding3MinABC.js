function findAB(numbers, c){
    for(let i = 0 ; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length ; j++){
            let a = numbers[i]
            let b = numbers[j]
            if(a * b === c){
                return [a, b]
            }
        }
    }
}