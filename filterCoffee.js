function search(budget, prices){
    const myBeans = prices.filter(b => b <= budget)
    return myBeans.sort((a,b) => a-b).join(',')
}