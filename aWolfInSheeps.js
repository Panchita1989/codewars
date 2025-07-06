function warnTheSheep(queue){
    let num = queue.length
    let result
    queue.forEach((e, i)=> {
        num -= 1
        if(e === 'wolf' && i !== queue.length-1){
            result =  `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`
        }else if(e === 'wolf' && i === queue.length - 1){
            result = `Pls go away and stop eating my sheep`
        }
    })
}