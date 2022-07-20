//every method

const numbers = [2,3,5,6,7,8];

const ans = numbers.every((number)=> number%2);
console.log(ans);

//callback function ---> true / false (boolean)
//every method ---> true / false (boolean)

//check every prodyct less than 30000

const userCart = [
    {productId:1, productName:"b1", price : 9000},
    {productId:2, productName:"b2", price : 1000},
    {productId:3, productName:"b3", price : 2000},
    {productId:4, productName:"b4", price : 4000},
    {productId:5, productName:"b5", price : 5000},
]
const ans1 = userCart.every((cartItem)=> cartItem.price <30000);
console.log(ans1);