//for in loop in array

const fruits = ["apple", "mango", "banana"];
fruits2= ["GRAPES"];
for(let index in fruits)
{
    console.log(fruits[index].toUpperCase())
    fruits2.push(fruits[index].toUpperCase())
}
console.log(fruits2)