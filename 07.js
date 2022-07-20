//trim()
//touppercase()
//tolowercase()
//slice

let firstName= "     BANBRIJ   "
console.log(firstName);
console.log(firstName.length);
firstName= firstName.trim();
console.log(firstName)
console.log(firstName.length);

firstName= firstName.toUpperCase();
console.log(firstName)

firstName= firstName.toLowerCase();
console.log(firstName)

//start index
//end index

let newstring= firstName.slice(0,3);
console.log(newstring);
