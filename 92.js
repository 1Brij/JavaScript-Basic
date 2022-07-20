// static methods and properties




class Person
{
    constructor(name, age, lastName, work)
    {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
        this.work = work;
    }
    static classInfo()
    {
        return 'this is helelellele';
    }

    fullName1()
    {
        return `${this.name} ${this.age}`;
    }

  

    get fullName()
    {
        return `${this.name} ${this.lastName}`;
    }


    setName(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName= lastName;
    }
}

const person1 = new Person('brij');
console.log(person1);
const info = Person.classInfo();
console.log(info);


