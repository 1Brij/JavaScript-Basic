function hello()
{
    console.log("Hello World");
}

//javascript function ===> function + object

console.log(hello.name)

//we can add our own properties 
hello.myOwnProperty = "very unique place";
console.log(hello.myOwnProperty);

//name property ---> tells function name;

//function pwovides more usefull properties

console.log(hello.prototype);

//only function provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";

hello.prototype.sing = function()
{
    return "lalala";
};

console.log(hello.prototype.sing());
