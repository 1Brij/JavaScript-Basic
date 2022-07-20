//AND && operators
let myName = "BRIJ";
let age = 12;

if(myName[0]="B"&& age<22)
{
    console.log("Name starts with B and age is below 22");
}

//if one condition is wrong then the whole statement will be wrong in AND operators

let myname= "BRIJ";
let myage= 20;

if(myname[0]= "D" && age>20)
{
    console.log("NAME STARTS WITH D AND AGE IS 20");
}
else{
    console.log("JHUTH BOLE KAWA KAATE");
}

//OR || operators
//it will run the operation until 1 condition is true if both are false then it will show false
let myName2= "BRIJ";
let myage2= 22;
if(myName[0]="E" || myage2>=22)
{
    console.log("Name starts with E and Age is 22");
}
else
{
    console.log("KUCH BHI");
}