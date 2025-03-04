// Method Chaining - Call one method after another in one continuous line of code.

// Version 1 - Without method chaining

UserName = window.prompt(`Enter Username`);

UserName = UserName.trim();

let letter = UserName.charAt(0);
letter= letter.toUpperCase();

let Extrachars = UserName.slice(1);

Extrachars = Extrachars.toLowerCase();

UserName= letter + Extrachars;

console.log(UserName);    //Ethannathaniel 

// Version 2 - With Method Chaining

UserName1 = window.prompt(`Enter your username again`);

UserName1 = UserName1.trim().charAt(0).toUpperCase() + UserName1.trim().slice(1).toLowerCase();

console.log(UserName1);

// Here in one line of code we are able to execute everything by calling methods one after another.

/*Here we are using .trim() twice as when we use the trim command
it returns a new string instead of changing the value of the original one

So basically we either need to store the trimmed string in place of the old one's variable
OR 

We operate on the original string and use .trim() , over and over again*/

//  QUESTION 

// Question:
// Write a JavaScript program that takes a user's name as input and modifies it using method chaining with string functions. The program should:

// Remove any leading or trailing spaces.
// Capitalize the first letter.
// Convert the rest of the string to lowercase.
// Replace any occurrences of multiple spaces within the name with a single space.

let QuestionName = window.prompt(`Enter your username for the question`);

    QuestionName = QuestionName.trim().charAt(0).toUpperCase()+ QuestionName.trim().slice(1).toLowerCase().replaceAll(/\s+/g," ");

    console.log(QuestionName);







