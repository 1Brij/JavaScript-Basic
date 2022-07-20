//function returning function

function myFunc()
{
    return [1,2,3]
}
const ans = myFunc()
console.log(ans)

function myFunc2()
{
    return  {name:"BRIJ", age:22, gender: "male"};
}
const ans1 = myFunc2();
console.log(ans1);

function myfunc()
{
    return function()
    {
       return "hello world";
       
    };
}
const ans3= myfunc()
console.log(ans3())

function mybrij()
{
    function hello()
    {
        return "hello world"
    }
    return hello;
}
const ans4 = mybrij();
console.log(ans4());