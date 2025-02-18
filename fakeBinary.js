function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 'o' : result += '1';
}
return result;