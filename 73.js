//call, apply, bind methods

function hello()
{
    console.log('THIS HELLO');
}
hello.call();

//call methods

const brij =
{
    firstName : "Brij Kumar Gupta",
    age:22,
    about: function(hobby, favAnime)
    {
        console.log(this.firstName, this.age, hobby, favAnime);
    }
}

const bob = 
{
    firstName:"bob",
    age:22
}

brij.about.call(bob, "Anime", "OnePiece");

//apply

const espada ={
    firstName: "Grimjow",
    age: 1000,
    about: function(hobby, favAnime)
    {
        console.log(this.firstName, this.age, hobby, favAnime)
    }
}

const espanol  =
{
    firstName: "Aizen dancho", 
    age: 100
}

espada.about.apply(espada, ["ANIME", "Bleach"]);

//bind

function siliconValley(favAnime, hobby)
{
    console.log(this.firstName, this.age, favAnime, hobby)
}
const elrich = 
{
    firstName: "ANONYMOUS",
    age: "infinity"
}

const richard =
{
    firstName: "Tensai",
    age: 26,
}

const funcho = siliconValley.bind(richard, "onepiece", "anime");
funcho();
const bancho = siliconValley.bind(elrich, "bleach", "anime");
bancho();