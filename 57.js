//important array methods
//for each
//map
//filter
//reduce

//important array methods

const numbers = [2,4,5,6];

function multiplyBy2(number, index)
{
    console.log("index is", index);
    console.log(`${number}*2=${number*2}`);
}

//multiplyBy2(numbers[0], 0);
//multiplyBy2(numbers[1], 1);
//multiplyBy2(numbers[2], 2);
//multiplyBy2(numbers[3], 3);

//for (i=0; i<numbers.length; i++)
//{
   // multiplyBy2(numbers[i], i)
//}

numbers.forEach(multiplyBy2);//forEach


const numbers1 = [2,3,4,5,6]
//numbers1.forEach(function(number, index)
//{
 //   console.log(`index is ${index} number is ${number}`)
//});
numbers1.forEach(function(number, index){
    console.log(number*2, `Index is ${index}`)
})

const users = [
    {firstName : "BRIJESH", age: 22},
    {firstName : "BOSS", age: 23},
    {firstName : "BOB", age: 24},
    {firstName : "BRIJUX", age: 25}
]
users.forEach(function(user){
    console.log(user.firstName);
    console.log(user.age)
});

for(let user of users)
{
    console.log(user.firstName, user.age)
}

users.forEach((user, index)=>{
    console.log(user.firstName, index);
    console.log(user.age);
});

