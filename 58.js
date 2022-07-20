//map method

//map is an array method

const numbers = [3,4,5,6,7]

const square = function(number)
{
    return number * number; //always use map function while usng map function
}
const squareNumber = numbers.map(square);
console.log(squareNumber);

const numb = [2,34,5,66,77];

const brij = function (number)
{
    return number * number;
}
const ans = numb.map(brij);
console.log(ans)

//map gives new array //forEach doesnt give new array

//anoteh short method

const numbers1 = [22,33,44,55,55];

const bob = numbers1.map((number, index) =>
{
    return `index : ${number * number}`;
});
console.log(bob);

//another trying

const users = 
[
    {firstName : "BRIJ", age: 22},
    {firstName : "BRIJesh", age: 22},
    {firstName : "Boss", age: 22},
    {firstName : "Bob", age: 22}
]

const userNames = users.map((user) =>
{
    return user.firstName;
});
console.log(userNames);

