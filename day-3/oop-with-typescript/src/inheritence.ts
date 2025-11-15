// first pillar of OOP

class Parent {
    name: string;
    age: number;
    address: string
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep() {
        console.log(`${this.name} ekhon ghumabe`);
    }
}




class Student extends Parent { };


class Teacher extends Parent {
    designation: string;
    constructor(designation: string,name:string,age:number,address:string) {

        super(name,age,address)

        this.designation = designation;
    }
}

const student = new Student('no-one', 12, 'bari nei');
// student.getSleep();
console.log(student)

const teacher = new Teacher('onek boro teacher','teacher',28,'nei nei');
console.log(teacher);
teacher.getSleep();
