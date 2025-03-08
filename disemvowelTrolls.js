function disemvowel(str) {
    let newStr = str.replaceAll('a', '').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','')
                    .replaceAll('A', '').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll('U','')
    return newStr
     
   }