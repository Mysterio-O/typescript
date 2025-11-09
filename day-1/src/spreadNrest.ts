// spread operator


const allFriends: string[] = []

const newFriends = ['john', 'cena', 'no need others'];

const oldFriends = ['omuk', 'tomuk'];

const currentFriends = ['kew nei'];

allFriends.push(...newFriends, ...oldFriends, ...currentFriends);
console.log(allFriends);


const user = {
    name: 'user',
    number: 101010101,
};

const otherInformation = {
    hobby: "i dont know",
    favourite: 'white'
};

const userInfo: {
    name: string;
    number: number,
    hobby: string;
} = {
    ...user,
    ...otherInformation
}

console.log(userInfo)