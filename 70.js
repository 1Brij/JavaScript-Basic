//optional chaining

const user = 
{
    firstName : "BRIJ KUMAR GUPTA",
    address : {houseNumber : 1234}, 
    age: 22
}
console.log(user);
console.log(user.address.houseNumber);

//?--> Optional chaing

const user1 =
{
    firstName: "brij"
}
console.log(user1.firstName);
console.log(user1?.address);

//This is how optional chaining works it will check if the value is their then it will print either it will not show error.

