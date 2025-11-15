// second pillar of OOP

class Person {
    getSleep() {
        console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log('i am student i sleep only 5 hours');
    }
}

class NextLevelDev extends Person {
    getSleep() {
        console.log('i am a next level dev, i sleep for 7 hours');
    }
}

const getSleepingHours = (person_type: Person) => {
    return person_type.getSleep()
}


const person = new Person();
const student = new Student();
const nextLevelDev = new NextLevelDev();

getSleepingHours(student)




class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {

    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius
    }

    // area = pi * radius * radius
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {

    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // area = height * width
    getArea(): number {
        return this.height * this.width;
    }
}


const getArea = (areaType: Shape) => {
   return areaType.getArea();
}

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(10, 10);

console.log(shape.getArea(), circle.getArea(), rectangle.getArea());
