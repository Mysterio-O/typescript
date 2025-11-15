class Animal {
    name:string;
    species:string;
    sound:string;
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound
    }
    /**
     * makeSound
     */
    public makeSound() {
        console.log(this.sound);
    }
}

const dog = new Animal('doggy', 'dog', 'ghew ghew');
dog.makeSound();