//block scope vs function scope
{
    let firstName = "BRIJ";
    console.log(firstName);
}

{
    var firstName = "BOB";
}
console.log(firstName);

{
    const firstName = "BRIJKUMARGUPTA";
    console.log(firstName);
}

function myApp()
{
    if(true)
    {
        let firstName = "BRIJESH";
        console.log(firstName);
    }
}
myApp();