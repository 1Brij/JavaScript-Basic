//NESTED IF ELSE

let winningnumber = 20;
let userGuess = +prompt("Guess a Number");

if(userGuess === winningnumber)
{
    console.log("YOUR GUESS IS RIGHT SHAKA BOOM");
}
else
{
    if(userGuess < winningnumber)
    {
        console.log("TOO LOW!!");
    }
    else
    {
        console.log("TOO HIGH!!");
    }
}