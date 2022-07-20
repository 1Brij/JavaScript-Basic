//class keyword
//In javascript class are fake

class createUser
{
    constructor(firstName, lastName, age, email, address)
    {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.email = email;
    }
    about(){ 
        return`${this.firstName} and ${this.age}`};
    is18(){
        return this.age >=18;
    }
    sing()
    {
        return "la lala la";
    }
}

//class constructor cannot be called without new keyword

const user1 = new createUser('BRIJ', 'GUPTA','22', 'brijgupta2000@gmail.com', 'INDIA');
console.log(user1);
console.log(user1.age);
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));

