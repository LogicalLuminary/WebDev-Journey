// let obj={
//     a:1,
//     b:23
// }
// console.log(obj)

class Animal{
    constructor(name){
        this.name =name
        console.log("Obj created")
    }
    eats(){
        console.log("i eat")
    }
    jumps(){
        console.log("jumps too")
    }
}

let a = new Animal("Gadha")
console.log(a)

class Lion extends Animal {
    constructor(name){
        super(name)
        this.name = "Lion "+name;
        console.log("Lion created")
    }
} 
let l = new Lion ("shera")
