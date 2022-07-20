//arrow functions
//arrow function takes this method from its surroundings.
const user1= 
{
    firstName : "BRIJ KUMAR GUPTA",
    age:22,
    about: () =>
    {

        console.log(this.firstName, this.age);
    }
}

user1.about.call(user1);
