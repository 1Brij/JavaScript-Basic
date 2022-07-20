//same method in base class

class Janwar
{
    constructor(name, breed, age)
    {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    eat()
    {
        return `${this.name} and ${this.breed} and ${this.age} dog is eating`;
    }

    isCute()
    {
        return true;
    }

    isSuperCute()
    {
        return age>=3;
    }
}

const animal = new Janwar("BOBBY", "DESI", 4);
console.log(animal)
console.log(Object.getPrototypeOf(animal));
console.log(animal.isCute());
console.log(animal.eat());

class Dog extends Janwar{

}

//object/instance

const name= new Dog("bossy", 'desi', 2 )
console.log(name);

//making our own constructor

class Car extends Janwar
{
    constructor(name, age, speed, model)
    {
        super(name, age);
        this.speed = speed;
        this.model = model;
    }
    run()
    {
       return  `${this.name} and ${this.speed} and ${this.model}`;
    }
}

const processCar = new Car("FERRARI", "infinite", "100000kmph", "V2000.0")
console.log(processCar);
console.log(processCar.run());

