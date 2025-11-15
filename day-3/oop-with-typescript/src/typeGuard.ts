const add = (num1:number|string,num2:number|string)=> {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else{
        num1.toString()+num2.toString();
    }
}

type NormalUser = {
    name:string;
}
type AdminUser ={
    name:string;
    role: string;
}

const getUser = (user: NormalUser | AdminUser)=> {
    if('role' in user){
        console.log(`${user.name} is an ${user.role}`);
    }else{
        console.log(`${user.name} is normal user`);
    }
}
getUser({
    name:'Mr x',
    role:'Admin'
})