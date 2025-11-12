// alias

type User = {
    name:string;
    age:number;
}

type Role = {
    role: 'admin' | 'user'
}

const user1 : User = {
    name:'MrX',
    age:190
}

type Combined = User & Role;

const userWithRole : UserWithRole | Combined = {
    name:'MrY',
    age:110,
    role:'admin'
}

interface UserWithRole {
    name:string;
    age:number;
    role:string;
}