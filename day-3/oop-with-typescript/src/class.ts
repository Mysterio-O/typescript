class Animal{
    constructor(public name:string,public species:string,public sound:string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    };

    makeSound(){
        console.log(this.sound)
    }
}

const dog = new Animal('dog','doggy','ghew ghew');
dog.makeSound();