//function (that create object)
// add key value pair
// object ko return karega

function createUser(firstName, lastName, age, address, hobby)
{
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.hobby = hobby;
    user.about = function()
    {
        return `${this.firstName} is ${this.age} years old`;
    };

    user.kya18 = function()
    {
        return this.age>=18;
    }
    return user;
}
const user1= createUser('Brij Kumar Gupta', 'marley', 22, 'hojai', 'anime');
console.log(user1);
const kya18 = user1.kya18();
console.log(kya);
const num = user1.about();
console.log(num);
