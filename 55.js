//callback functions

function myFunc(name)
{
    console.log("INSIDE MY FUNC");
    console.log(`my name is ${name}`);
}

function myFunc2(callback)
{
    console.log("I AM A FUNCTION");
    callback("BRIJ")
}
myFunc2(myFunc);

function myNawa(nawa)
{
    console.log("ORE WA NAWA PETER PARKER");
    nawa("spiderman");
}

myNawa(myFunc);