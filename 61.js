//sort method 

const numbers = [5,8,1200,400,3000];
numbers.sort();
console.log(numbers);

//["5", "8", "1200", "400", "3000"]
//[53, 56, 49, 52, 52]
//In javascript it will take the value of first value of the first number like wise their is 1200 it will take the value of 1 and the value of 1 is 49

const userName = ['brij', 'ABCD','abcd', 'mohit', 'bob', 'nixon'];
userName.sort();
console.log(userName);

//In javascript it will first alwwways sort capital alphabets

const numbers1 = [33,44,55,322,111,44,2];
numbers1.sort((a,b)=>{
    return a-b;
});
console.log(numbers1);

numbers1.sort((a,b)=>
{
    return b-a;
});
console.log(numbers1);

//just remember while sorting in ascending method use a-b and while sorting in descending method use b-a

//1200,410
//a-b ---> 790
//a-b ---> positive (greater than 0) ---> b,a
//410, 1200

//a-b ---> negative ---> a,b
//5,9 ---> -4

//price lowtohigh and hightolow

const products = [
    {productId:1, productName:"b1", price : 900},
    {productId:2, productName:"b2", price : 100},
    {productId:3, productName:"b3", price : 200},
    {productId:4, productName:"b4", price : 400},
    {productId:5, productName:"b5", price : 500},
]
//lowToHigh

products.sort((a,b)=>
{
    return a.price-b.price;
});
console.log(products);

const lowToHigh = products.slice(0).sort((a,b)=>
{
    return a.price-b.price;
});
console.log(lowToHigh);

//hoghToLow
const hightolow = products.slice(0).sort((a,b)=>
{
    return b.price-a.price;
});
console.log(hightolow);