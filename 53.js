//rest parameters

function myFunc(a,b,c)
{
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}

myFunc(1,2,3);

//new method adding array with spread operator

function mylog(a,b,...c)
{
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is` ,c)
}

mylog(3,4,5,6,7,8,9);

function addall(...numbers)
{
    console.log(numbers)
    console.log(Array.isArray(numbers))
}
addall(3,4,5,67,8);

myvar = "value1"
function addevery(...numbers)
{
    console.log(numbers);
    console.log(myvar);
    console.log(Array.isArray(numbers));
}
addevery(2,3,4,6,7,8);

function addall1(...numbers)
{
    let total =0;
    for(let number of numbers)
    {
        total = total + number;
    }
    return total;
}
const ans = addall1(2,34,56,7,7,1);
console.log(ans);