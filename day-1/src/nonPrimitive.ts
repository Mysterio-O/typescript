let arrOfStr: string[] = ['st', 'eds', 'dg'];

arrOfStr.push('fd');
arrOfStr.push('eee');
console.log(arrOfStr);


// tuple

let userInfo: [string, number] = ['user', 10];
let activities: { a: string, b: number, c: undefined } = { a: 'string', b: 10, c: undefined };

const user: {
    first_name: string;
    middle_name: string;
    last_name: string;
    readonly literal:string;
} = {
    first_name: 'John',
    middle_name: 'stormborn',
    last_name: 'smith',
    literal:'Literal'
};

user.literal= "Literal Literal"

console.log(user)