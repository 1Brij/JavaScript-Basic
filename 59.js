//filter method

const numbers = [1,3,4,5,6];
const isEven= function(number)
{
    return number %2===0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const numbers1 = [2,4,56,7,788,236, 6767,344,11];
const isOdd = number =>
{
    return number %2!==0;
}
const oddNumbers = numbers1.filter(isOdd);
console.log(oddNumbers);

