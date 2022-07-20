//function declaration

function myBrij()
{
    console.log("BRIJ KUMAR ");
}
myBrij()

function myplus()
{
    console.log(2+10);
}
myplus()
myplus()
myplus()
myplus()

function mybob()
{
    console.log("Brij Kumar Gupta");
}
mybob()


const mybase = mybob();
console.log(mybase);

function sumOfTwoNumbers(number1, number2)
{
    return number1 + number2
}
const returnedValue = sumOfTwoNumbers(22, 44);
console.log(returnedValue);

function mybase1(naming1, naming2)
{
    return naming1 , naming2
}
const returnedValue1= mybase1("BRIJ", "BOB");
console.log(returnedValue1);

function sumOfThreeNumbers(number1, number2, number3)
{
    return number1 + number2 + number3;
}
const returnedValue2= sumOfThreeNumbers(33,44,5);
console.log(returnedValue2);
console.log(undefined+undefined);

//odd or even
function isEven(number)
{
    if(number%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(isEven(22));

function isEven1(number)
{
    if(number%2===0)
    {
        return true;
    }
    else
    {
        return false;s
    }
    
}
console.log(isEven1(32));


function mystring(string)
{
    return string[2];
}
console.log(mystring("BRIJESH"));


function findTarget(array, target)
{
    for(i=0; i<array.length; i++)
    {
        if(array[i]===target)
        return i;
    }
    return -1;
}
const myArray = [1, 2, 4 ,6]
const ans = findTarget(myArray, 2)
console.log(typeof ans, ans);