//functions inside functions

function app()

{
    const hello = () =>
    {
        console.log("HELLO FORM BRIJ");
    }
    const sumOfThreeNumbers =(num1,num2,num3) =>
    {
        return num1+num2+num3;
    }

    const isEven = number =>
    {
        return number%2===0;
    }
    console.log("inside app");
    hello();
    console.log(sumOfThreeNumbers(22,33,44));
    console.log(22);
}
app();

function brij()
{
    console.log("BRIJ KUMAR GUPTA HELLO");

    const sumMul = (num1, num2) =>
    {
        return num1*num2;
    
    }

    const sumDiv = (num1, num2)=>
    {
        return num1%num2;
    }

    const sumMin = (num1, num2) =>
    {
        return num1-num2;
    }

    const firstChar = mystring => mystring[2];
    console.log(sumMul(33,2));
    console.log(sumMin(200-100));
    console.log(sumDiv(22,10));
    console.log(firstChar("BRIJ"));
}
brij();

function BRIJ()
{
    console.log("BRIJ KUMAR GUPTA NICK NAME BABU HELLO FROM MY SIDE");

    const Brij = (add1, add2, add3) =>
    {
        return add1+ add2+ add3;
    }

    const Bob = (jod1, jod2, jod3, jod4, jod5) =>
    {
        return jod1+ jod2 - jod3 * jod4 % jod5;
    }

    const Boss = (god1, god2, god3)=>
    {
        return god1 % god2 + god3;
    }

    console.log(Brij(22,44,55));
    console.log(Bob(22,33,44,1))
}