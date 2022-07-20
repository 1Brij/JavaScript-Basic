class Animal 
{
    constructor(name, age)
    {
        this.age= age;
        this.name = name;
    }
    eat()
    {
        return `${this.name} is eating`;
    }

    isSuperCute()
    {
        return this.age <=1;
    }

    isCute()
    {
        return true;
    }
}

const animal1 = new Animal('cow', 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCute());
console.log(animal1.isSuperCute());

//cat class

class Dog
{
    constructor(name, age)
    {
        this.name =name;
        this.age = age;
    }
    eat()
    {
        return `${this.name} is eating`;
    }

    isSuperCute()
    {
        return this.age <=1;
    }

    isCute()
    {
        return true;
    }
}

const tommy = new Dog("tom", 3);
console.log(tommy.eat());

//extends keyword

class fox extends Animal
{

}

const bob = new fox("BAKRA", 1000);
console.log(bob);
console.log(Object.getPrototypeOf(bob));
