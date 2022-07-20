//some method

const numbers = [3,4,5,6];

const ans = numbers.some((number)=> number%2===0)
console.log(ans);

//some means if only one is correct then its done and it will print true.

const userCart = [
    {productId:1, productName:"b1", price : 9000},
    {productId:2, productName:"b2", price : 1000},
    {productId:3, productName:"b3", price : 2000},
    {productId:4, productName:"b4", price : 4000},
    {productId:5, productName:"b5", price : 5000},
]
const ans1 = userCart.some((cartItem)=>cartItem.price<20000)
console.log(ans1);

