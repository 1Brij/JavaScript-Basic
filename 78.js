const userM=
{
    about: function()
    {
        return `${this.firstName} is ${this.age} and ${this.profession} and ${this}`

    },
    kya18: function()
    {
        return this.age>=18;
    }
}

function allUser(firstName, lastName, age, profession, hobby)
{
    const user={}
    user.firstName= firstName;
    user.lastName= lastName;
    user.age= age;
    user.profession= profession;
    user.hobby= hobby;
    user.kya18= userM.kya18;
    user.about= userM.about;
    return user;
}

const user1= allUser('BRIJ', 'GUPTA', '22', 'STUDENT', 'ANIME')
console.log(user1.about());
console.log(user1)
const user2= allUser('BOB', 'KUMAR', '22', 'STUDENT', 'CRICKET');
console.log(user2.about());
const user3= user3.kya18();
console.log(user3);