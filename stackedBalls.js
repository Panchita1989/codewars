function stackHeight2d(layers) {
    let square = Math.sqrt(3)/2
    return  layers === 0 ? 0 :1 +(layers-1)*square
}