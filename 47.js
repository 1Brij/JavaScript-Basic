//arrow functions

const singBrij = () => 
{
    console.log("BRIJ IS PROMAX");
}
singBrij();



const sumOfThreeNumbers = (number1, number2, number3) =>
{
    return number1 + number2 + number3;
}
const ans  = sumOfThreeNumbers(22,33,44)
console.log(ans);

//if there is only one parameer in arraow function we can remove parathensis

//const isEven = number =>
//{
//    return number %2===0;
//}
//const even = isEven(22);
//console.log(even);

//more intresting ways through arrow function
const isEven1 = number => number %2===0;
console.log(isEven1(33));

const firstChar = anyString =>  anyString[0];
console.log(firstChar("BRIJ"));

