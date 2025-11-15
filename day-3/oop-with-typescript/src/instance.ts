class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} sleeps ${numOfHours} hr per day`)
    }
}

class Student extends Person {

    doStudy(numOfHours: number) {
        console.log(`${this.name} studies ${numOfHours} hr per day`)
    }

}

class Teacher extends Person {
    takeClass(numOfHours:number){
        console.log(`${this.name} takes class ${numOfHours} hr per day.`)
    }
}

const student = new Student('Mr X');
const teacher = new Teacher('Mr Y');
const person = new Person('Mr Z');

const getUserInfo = (user:Person)=> {
    if(user instanceof Student){
        user.doStudy(10);
    }else if(user instanceof Teacher){
        user.takeClass(2);
    }else{
        user.getSleep(8);
    }
}

getUserInfo(student);
getUserInfo(teacher);
getUserInfo(person);
