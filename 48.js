//hoisting

hello()//this is called hoisting we can print a function before initialising
function hello()
{
    console.log("HELLO WORLD");
}

//But we cant in the case of const, let etc. It will show declared before initializing error.
//In the case of var it will show undefined.

