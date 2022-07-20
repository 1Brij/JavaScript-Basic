//objects inside array
//very useful in real world applications

const users = 
[
    {userId: 1, firstName: 'Brij', gender:'male'},
    {userId: 2, firstName: 'Bob', gender:'male'},
    {userId: 3, firstName: 'Boss', gender:'male'}
];
console.log(users);

for(let user of users)
{
    console.log(user.firstName);
}

