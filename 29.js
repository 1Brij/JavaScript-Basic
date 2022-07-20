//how to clone array
//how to concatenate two arrays
let array1= ["item1", "item2"];
let array2=array1;
console.log(array1===array2);

//slice method for cloning
let array=["item1", "item2"];
let array0=array1.slice(0);
array.push("item3");
console.log(array===array0);
console.log(array);
console.log(array0);

//concat method for cloning
let array3=["item1", "item1", "item3"];
let array4=[].concat(array3);
array3.push("item4");

console.log(array3===array4);
console.log(array3)
console.log(array4)

//spread operator
let array5=["item1", "item2", "item3"];
let array6= [...array5, "item44","item45"];
array5.push("item4");
console.log(array5===array6)
console.log(array5);
console.log(array6);


//new way
let array11=["item1", "item2", "item3"];
let array12=array11.slice(0).concat(["item4", "item5"]);
array11.push("item4");
console.log(array11===array12);
console.log(array11);
console.log(array12);