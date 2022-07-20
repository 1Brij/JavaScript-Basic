//iterables
//jispe hum for  of loop laga sake
//string, array are iterable

const firstName = "BRIJ";
for(let char of firstName)
{
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items)
{
    console.log(item)
}

const allItems = ['item1', 'item2', 'item3', 'item4'];
for(let brij of allItems)
{
    console.log(brij, allItems);
}

//const users = {'key1': 'value1', 'key2':'value2', 'key3':'value3'};
//for(let bob of users)
//{
//    console.log(bob)
//object is not iterable

//string is iterable and array

// array like object
// jinke paas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- string

const firstName1 = "brij";
console.log(firstName1.length)
console.log(firstName1[2]); 


