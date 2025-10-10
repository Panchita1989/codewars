function whatListAmIOn(actions) {
    let bad = 0
    let good = 0
    actions.forEach(e => {
        if(e[0] === 'b' || e[0] === 'f' || e[0] === 'k') bad += 1
        if(e[0] === 'g' || e[0] === 's' || e[0] === 'n') good += 1
    })
  
  return bad < good ? 'nice': 'naughty'
}