const obj1=
{
    key1:"value1",
    key2:"value2"
}

const obj2= Object.create(obj1);
obj2.key= "VALUE3";
console.log(obj2);

console.log(obj2.__proto__);

// __proto__ 
//official ecmascript documentation
//[[Prototype]]

//__proto and [[Prototype]] are same


