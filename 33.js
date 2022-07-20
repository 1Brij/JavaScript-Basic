//for of loop in array

const fruits = ["apple", "mango", "banana"];
for(let fruit of fruits)
{
    console.log(fruit.toUpperCase());
}

const fruit1= ["apple", "mango", "banana"];
const fruit2=["grapes".toUpperCase()];
for(let fruit of fruit1)
{
    fruit2.push(fruit.toUpperCase())

}
console.log(fruit2);