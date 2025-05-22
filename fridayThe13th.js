function killcount(counselors, jason){
    let killed = []
    for(let i = 0; i < counselors.length; i++){
        if(counselors[i][1] < jason){
            killed.push(counselors[i][0])
        }
    }
    return killed
}