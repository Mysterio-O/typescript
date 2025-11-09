/**
 * FUNCTION
 *  => arrow function
 *  => native function
 */



function add(num1: number, num2: number): number {
    return num1 + num2
}

const addAnother = (num1: number, num2: number): number => {
    return num1 + num2;
}


// * object {function=Method}

const poorMan = {
    name: 'poor',
    balance: 0,
    addBalance(value: number): number {
        return this.balance += value;
    }
};

poorMan.addBalance(50 * 2000);

console.log(poorMan)