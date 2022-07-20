function allUser(firstName, lastName, age, profession, hobby)
{
    const user= Object.create(allUser);
    user.firstName= firstName;
    user.lastName= lastName;
    user.age= age;
    user.profession= profession;
    user.hobby= hobby;
    user.kya18= allUser.kya18;
    user.about= allUser.about;
    user.sing=allUser.sing;
    return user;
}
console.log(allUser.prototype);

allUser.prototype.about = function()
{
    return `${this.firstName} is ${this.age} years old`;
}

allUser.prototype.kya18= function()
{
    return this.age >=18;
}

allUser.prototype.sing = function()
{
    return "lalalala";
}


const user1= allUser('BRIJ', 'GUPTA', 22, 'STUDENT', 'ANIME');
const user2 = allUser('harish', 'vasi', 'brijgupta2000@gamil.com');
console.log(user1);
console.log(user2);

for(let key in user1)
{
    console.log(key);
}

//hasOwnProperty

for(let key in user1)
{
    if(user1.hasOwnProperty(key))
    {
        console.log(key);
    }
}