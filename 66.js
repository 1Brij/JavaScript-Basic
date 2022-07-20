//splice method 
//start, delete, insert

//to delete something in array we use splice method.

const myArray = ['item1', 'item2', 'item3'];
//delete

const deletedItem = myArray.splice(0, 1);
console.log("deleted item", deletedItem);

//insert

myArray.splice(1, 0, 'inserted item');
console.log(myArray);

//insert and delete

const deletedItem1 = myArray.splice(1, 2, "inseerted item1", "inserted item2")
console.log("deleted item", deletedItem1);
console.log(myArray);





