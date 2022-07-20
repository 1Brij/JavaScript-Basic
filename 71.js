// method
// function inside object

function personInfo()
{
    console.log(`This person name is ${this.firstName} and age is ${this.age}`);
}

const person1 =
{
    firstName : "BRIJ KUMAR GUPTA",
    age: 22,
    about: personInfo
}

const perosn2 =
{
    firstName: "BOB KUMAR GUPTA",
    age: 22,
    about: personInfo

}

const person3 = 
{
    firstName: "BOSS KUMAR GUPTA",
    age: 22,
    about: personInfo

}

person1.about()
perosn2.about()
person3.about()

console.log("THIS IS ANOTHER PROGRAM")

function brijInfo()
{
    console.log(`This great person name is ${this.firstName} and age is ${this.age}`)
}
function newInfo()
    {
        console.log(`His hobby is ${this.hobby} and number of achievements ${this.achievement}`)
    }

const Brij1 =
{
    firstName: "Brij the GREAT",
    age: 22,
    bob: brijInfo
}

const Brij2=
{
    hobby: "ANIME",
    achievement: "NONE TILL NOW",
    about: newInfo
}

Brij1.bob();
Brij2.about();

console.log(this)