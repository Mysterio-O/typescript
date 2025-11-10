// union

type userRole = 'admin' | 'user' | 'guest'

const dashboard = (role: userRole) => {
    switch (role) {
        case 'admin':
            return 'admin dashboard';
        case 'user':
            return 'user dashboard';
        case 'guest':
            return 'guest dashboard'
    }
};

console.log(dashboard('admin'));


// intersection

type Employee = {
    id: string;
    name: string;
    phone: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const MrX: EmployeeManager = {
    name: '',
    id: '',
    phone: '',
    designation: '',
    teamSize: 20
}