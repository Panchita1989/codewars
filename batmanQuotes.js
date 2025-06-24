let getQuote = function(quotes, hero){
    const heroIndex = hero.split('').find(char => !isNaN(char))
    const index = Number(heroIndex)
    const heros = ['Batman', 'Robin', 'Joker']
    const quote = quotes[index]
    const heroName = heros.find(e => e[0] === hero[0])

    return `${heroName}: ${quote}`
}