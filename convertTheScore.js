function scoreboard(string){
    let scores = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3, 
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  let scoreOne = string.split(' ').reverse()[1]
  let scoreTwo = string.split(' ').reverse()[0]

  return [scores[scoreOne], scores[scoreTwo]]
}