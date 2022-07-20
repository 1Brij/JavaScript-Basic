//default parameters

function addtwo(a,b)
{
    if(typeof b ==="undefined")
    {
        b=22
    }
    return a+b;
}
console.log(addtwo(22));

//direct adding default

function add2(a,b=0)
{
    return a+b;
}
console.log(add2(2,22));

