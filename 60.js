//reduce method

const numbers = [1,2,3,5,6,3];

//aim : sum of all numbers in array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

//accumulator, current value, return 
//1              2             3
//3              3             6
//6              5             11
//11             6             17
//17             3             20

const userCart = 
[
    {productId:1, productName: "mobile", price:10000},
    {productId:2, productName: "laptop", price:100000},
    {productId:3, productName: "TV", price:1000000}
]
const totalamount = userCart.reduce((totalPrice, currentProduct)=>
{
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalamount);