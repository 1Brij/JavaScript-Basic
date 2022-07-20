//function expression

const singBrij = function()
{
    console.log("BRIJ KUMAR GUPTA IS PRO")
}
singBrij();

const sumOfThreeNumbers= function(num1, num2, num3)
{
    return  num1+ num2+ num3;
}
const ans = sumOfThreeNumbers(22,44,66);
console.log(ans);

const isEven = function(number)
{
    return number % 2===0;
}
console.log(isEven(22));

const firstChar = function(array, target)
{
    for(i=0; i=array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return -1;
}
