//param destruction

//object
//react

const person = {
    firstName : "THOR",
    gender : "Male"
}

function printdetails(obj)
{
    console.log(obj.firstName);
    console.log(obj.gender);
}

printdetails(person);

console.log("JUST TRYING");

const brijdetails = 
{
    firstName : "BRIJ",
    middleName : "KUMAR",
    lastName : "GUPTA",
    faouriteAnime : "ONE-PIECE",
    collegeName: "BVEC",
    homeTown: "HOJAI",
}



function allDetails(obj)
{
    console.log(obj.firstName);
    console.log(obj.middleName);
    console.log(obj.lastName);
    console.log(obj.faouriteAnime);
    console.log(obj.collegeName);
    console.log(obj.homeTown);
}

allDetails(brijdetails);

//another one trying

const bobdetails =
{
    firstName:"BOB",
    middleName:"KUMAR",
    lastName:"GUPTA",
    faouriteAnime:"DRAGON BALL SUPER",
}
//with object destructing

function boballdetails({firstName, middleName, faouriteAnime})
{
    console.log(firstName);
    console.log(middleName);
    console.log(faouriteAnime);
}

boballdetails(bobdetails);

const bossdetails =
{
    firstName : "BOSS",
    middleName: "KUMAR",
    lastName: "GUPTA"
}

function allBossDetails({firstName, middleName, lastName})
{
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
allBossDetails(bossdetails);

