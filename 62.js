//find method

const myArray = ["hello", "cat", "dog", "lion"];

function isLength(string)
{
    return string.length ===5;
}
const ans = myArray.find(isLength);
console.log(ans);

const users = 
[
    {userId:1, userName: "Brij"},
    {userId:2, userName: "Babua"},
    {userId:3, userName: "brijesh"},
    {userId:4, userName: "nixon"},
    {userId:5, userName: "Bob"},
]

const finalUser= users.find((user)=> user.userId===3);
console.log(finalUser);

const finalUser1 = users.find((user) =>
{
    return user.userId===1;
});
console.log(finalUser1);
