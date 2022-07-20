const user1 ={
    firstName: "BRIJ",
    age: 22,
    about: function()
    {
        console.log(this.firstName, this.age)
    }
}

//don't do this mistake

//user1.about();

const myFunc = user1.about;
myFunc();

const myFunc1 = function()
{
    console.log(this.firstName, this.age)
}
myFunc1()

//use bind

const myFunc3 = user1.about.bind(user1);
myFunc3();
