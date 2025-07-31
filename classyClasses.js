class Person{
    constructor(name, age){
       this.name = name
       this.age = age 
    }
    get info(){
        retunr `${this.name}s age is ${this.age}`
    }
}