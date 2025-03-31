function mostLikely(prob1, prob2){
   let numOne = prob1.split(':')
   let numTwo = prob1.split(':')
   numOne = numOne[0]/numOne[1]
   numTwo = numTwo[0]/numTwo[1]
   return numOne > numTwo
}