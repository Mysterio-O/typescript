const user = {
    id: 123,
    name: {
        firstName: 'johnny',
        middleName: 'johnny',
        lastName: 'johnny'
    },
    gender: 'male',
    favColor: 'black'
}

const { id, name: { middleName } } = user;