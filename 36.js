//array destructing

const myArray= ["item1", "item2"];
let myvar1 = myArray[1];
let mybar= myArray;
let mybase = myArray[0];
console.log("Value of myArray is", myArray);
console.log("Value of myvar1 is", myvar1);
console.log("Value of mybar is", mybar);
console.log("Value of mybase is", mybase);


//shortcut 

const myArray1= ["item1", "item2", "item3"];
let [,myvar , mybase1] = myArray1;
console.log("value of my var is", myvar);
console.log("value of my base is", mybase1);

