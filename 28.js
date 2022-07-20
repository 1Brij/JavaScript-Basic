//primitive vs reference data types
let num1=10;
let num2=num1;
console.log("Value of num1 is", num1);
console.log("Vlaue of num2 is", num1);
num1++
console.log("Value after incrementation");
console.log("Value of num1", num1);
console.log("Value of num2", num2);

//reference type
let array1= ["item1", "item2", "item3"];
let array2= array1;
console.log("Value of array1", array1);
console.log("Vlaue of array2", array2);
array1.push("item0");
console.log("Value after push")
console.log("Value of array1",array1);
console.log("Value of array2", array2);

