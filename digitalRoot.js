function sumDigits(n){
   if(n < 10){
    return n
   }
   return sumDigits(
        n.toString().split('').reduce((acc, c) => acc + +c, 0)
   )
}

