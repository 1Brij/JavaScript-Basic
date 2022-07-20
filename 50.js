//lexical scope

const myvar = "value1";

function myapp()
{
    function myFunc()
    {
        const myFunc2 = ()=>
        {
            console.log("INSIDE WORLD", myvar);
        }
        myFunc2();
    }
    console.log(myvar);
    myFunc();
}
myapp()