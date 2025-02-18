const reverseSeq = n => {
    let newArr = [];
    for (let i = 1; i<=n; i++){
        newArr.unshift(i);
    }