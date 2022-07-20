//how to iterate objects

const person = 
{
    name: "BRIJ KUMAR GUPTA",
    age: 22,
    work: "student",
    "my hobbies": ["Anime", "Sleeping"]
}

//for iterating objects we use two ways
//for in loop
//object.keys

//different ways to print objects and their values
for(let key in person)
{
    console.log(key);
}

for(let brij in person)
{
    console.log(person[brij])
}

for(let bob in person)
{
    console.log(`${bob} : ${person[bob]}`);
}

for(let lele in person)
{
    console.log(lele, ":", person[lele]);
}

console.log(typeof (Object.keys(person)))
const val = Array.isArray((Object.keys(person)));
console.log(val);

