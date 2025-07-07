function killer(suspectInfo, dead){
    for(person in suspectInfo){
        if(dead.every(name => suspectInfo[person].includes(name))){
            return person
        }
    }
}