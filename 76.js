const user = 
{
    FirstName : "BRIJ KUMAR GUPTA",
    age: 22,
    about()
    {
        console.log(this.FirstName, this.age);
    }
}

user.about();