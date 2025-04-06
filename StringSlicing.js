// String Slicing - creates a substring from a string.

const FullName = "Ethan Nathaniel";

let FirstName = FullName.slice(0,5); // The ending value in slice is not included so add 1 extra to the last position of the substring you want to extract.

console.log(FirstName);

let LastName = FullName.slice(6,15); // Here even if we exclude the end value it will give us th substring till the end.

let LastName2 = FullName.slice(6); // Last value excluded.
console.log(LastName);
console.log(LastName2);

let FirstChar = FullName.slice(0,1);

console.log(FirstChar);

let LastChar = FullName.slice(-1); // Negative Indices work from the back to the front , starting from -1 and then decreasing.

console.log(LastChar);

// To find the first and last name dynamically using indexOf method along with string slicing.

let FirstNameDy;
let LastNameDy;

FirstNameDy = FullName.slice(0,FullName.indexOf(" ")); // Starts at 0 and takes characters upto but excluding the first instance of a whitespace.

console.log(FirstNameDy); // Gives first name as substring.

LastNameDy = FullName.slice(FullName.indexOf(" ")+1); // starts off at the index after the whitespace and goes on till the end therefore no end value specified.

console.log(LastNameDy); // Gives second name as substring.

console.log(FirstNameDy,LastNameDy); // Name

console.log(`Your Name is ${FirstNameDy} ${LastNameDy}`);

// Exercise

const email = "ethan.nathaniel201@gmail.com";

let UserName = email.slice(0,email.indexOf("@"));

console.log(UserName);

let Extension = email.slice(email.indexOf("@"));

console.log(Extension);

// Slicing a string doesnt change the original string.















