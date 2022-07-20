//difference between dot and bracket notaion

const person = 
{
    name: "BRIJ KUMAR GUPTA",
    age: 22,
    work: "student",
    "my hobbies": ["Anime", "Sleeping"]
}
console.log(person)
console.log(person["my hobbies"]);
console.log(person.name)
console.log(person["work"].toUpperCase());

const key= "email";
person[key]= "brijgupta2000@gmail.com";
console.log(person);
