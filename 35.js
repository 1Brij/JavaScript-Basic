//for of loop in array
const fruits= ["apple", "guava", "mango"];
const fruits1= [];

for(let fruit of fruits)
{
    console.log(fruit.toUpperCase())
    fruits1.push(fruit.toUpperCase())
}
console.log(fruits1)