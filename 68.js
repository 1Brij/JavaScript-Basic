//sets (it is iterable)
//store data
//sets also have its own methods
//no index-based access
//order is not gaurantedd
//unique items only (no duplicates allowed)

const numbers = new Set([1,2,3]); //syntax of set
console.log(numbers);

const numbers1 = new Set([2,3,4,4]);
console.log(numbers1); //duplicates are not allowed
console.log(numbers[0]) //no index-based access allowed

const numbers2 = new Set("abcde");
console.log(numbers2);

const numbers3 = new Set();
numbers3.add(2);
numbers3.add(4);
numbers3.add(["item1"]);
numbers3.add(4);
numbers3.add(55);
numbers3.add('item');
console.log(numbers3)
if(numbers3.has(4))
{
    console.log('4 is here')
}
else{
    console.log('not')
}

const items = new Set();
items.add(0);
items.add(1);
items.add(2);
items.add(3);
items.add(4);

for(let item of items)
{
    console.log(item, items, 'items is hot');
};

//new 

const myArray = [1,2,2,4,3,4,5,6,6];
const newNumbers = new Set(myArray);
console.log(newNumbers);
console.log(myArray);

let length =0;
for(let element of newNumbers)
{
    length++;
}
console.log(length);

//new
//object literal 
//key -> string
//key -> symbol
//99.9% of keys in objects are strings, 0.1% of symbols
const person =
{
    firstName: "BRIJ",
    age: 22,
    1:"one"
}
console.log(person[1])
for(let key in person)
{
    console.log(typeof key);
}

//key value pair

const person1 = new Map()
person1.set('firstName', 'BRIJ KUMAR GUPTA');
person1.set('age', 22);
person1.set(1, 'one')
console.log(person1);
console.log(typeof 1);
console.log(person1.get('firstName'));

for(let key of person1.keys())
{
    console.log(key, typeof key)
}

//we can only pur for in loop in object

for(let [key, value] of person1)
{
    console.log(key, value)
}

//new

const person3= new Map([['firstName', 'BrijKumarGupta'], ['age', 22]])
console.log(person3)


const person2 = 
{
    id: 1,
    firstName: "BRIJ"
}
const extrainfo = new Map();
extrainfo.set(person2, {age:22, gender: 'male'});
console.log(person2.id);
console.log(extrainfo.get(person2).gender);
console.log(extrainfo.get(person2).id);

//new

const person4 = 
{
    id:2,
    firstName: "BRIJ KUMAR GUPTA",
    title: "gupta",
    profession : "student"
}

const newInfo = new Map();
newInfo.set(person4), {age:22, gender: "male"};
console.log(person4.id);
console.log(person4.firstName);
console.log(person4.title);
console.log(person4.profession);









