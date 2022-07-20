//spread operator

const array1= [1,2,3];
const array2 = [5,6,7];

const newArray =[...array1, ...array2, 99, 233, 222];
console.log(newArray);

const newArray1 = [..."abc"];
console.log(newArray1);

//spread operator in objects

const obj1=
{
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

const obj2=
{
    key4: "value4",
    key5: "value5",
    key6: "value6"
}

const newObject = {...obj1, ...obj2}
const newObject1= {...obj1, ...obj2, key55:"value22"} 
console.log(newObject);
console.log(newObject1);

const newObject3 = {...["item1", "item2"]}
console.log(newObject3);

const newObject4= {..."abcdefghijklmn"}
console.log(newObject4);
