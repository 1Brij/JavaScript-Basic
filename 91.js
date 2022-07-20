// getters and setters

class Person
{
    constructor(name, age, lastName, work)
    {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.work = work;
    }

    fullName1()
    {
        return `${this.name} ${this.age}`;
    }

    //now we will use fullName function wothout using parantheis()

    get fullName()
    {
        return `${this.name} ${this.lastName}`;
    }

    //setter method
    setName(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName= lastName;
    }
}

const person1 = new Person("brij", 22, "gupta", "student");
console.log(person1);
console.log(person1.fullName);
console.log(person1.name);
console.log(person1.lastName);

person1.setName("bob", "prakash");
console.log(person1.firstName);
console.log(person1.lastName);




