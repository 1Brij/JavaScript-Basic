//nested destructing

const users = 
[
    {userId: 1, firstName: 'Brij', gender:'male'},
    {userId: 2, firstName: 'Bob', gender:'male'},
    {userId: 3, firstName: 'Boss', gender:'male'}
];
const [user1, user2, user3] = users;
console.log(user1);

const [{firstName}, , {gender}]= users;
console.log(firstName);
console.log(gender);

const [{firstName: myName}] = users;
console.log(myName);

const [{gender: sex}]= users;
console.log(sex);
