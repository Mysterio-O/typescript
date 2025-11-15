// static - those things which never changes

class Counter{
    count:number = 0;

    increment(){
        return this.count+=1
    }

    decrement(){
        return this.count -= 1
    }

}

const instance1 = new Counter(); // holding specific memory location

console.log(instance1); // >>> 0
console.log(instance1.increment()) // >>> 1


const instance2 = new Counter(); // holding specific memory location

console.log(instance2.increment()) // >>> 1
console.log(instance2.increment()) // >>> 2
console.log(instance2.increment()) // >>> 3



// using static

class Counter2{

    /**
     * using static keyword makes the state static
     */

   static count:number = 0;

    increment(){
        return Counter2.count+=1
    }

    decrement(){
        return Counter2.count -= 1
    }

}

const instance3 = new Counter2();
const instance4 = new Counter2();

console.log(instance3.increment()); // >>> 1
console.log(instance3.increment()); // >>> 2
console.log(instance3.increment()); // >>> 3
console.log(instance3.increment()); // >>> 4


console.log(instance4.increment()) // >>> 5
console.log(instance4.increment()) // >>> 6
console.log(instance4.increment()) // >>> 7