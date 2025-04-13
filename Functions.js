// A function is a section of reuseable code , which can be called to execute that section of code.

function happyBirthday()
{
    stringhb = "Happy Birthday to You\n";

    console.log(stringhb.repeat(6));
}

happyBirthday(); // Calling the function
happyBirthday();

function HappyBirthday(Name,Age) // function with parameters
{
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday Dear ${Name}`);
    console.log(`You are ${Age} years old`);
}

HappyBirthday("Ethan",19); // calling the function with arguments
HappyBirthday("Jennifer",19);

HappyBirthday(19,"Jennifer");

function add(x,y)
{
    let result = x+y;
    return result; // After function resolution the function takes the value of whatevers returned
}

function subtract(x,y)
{
    return x-y;
}

function multiply(x,y)
{
    return x*y;
}

function divide(x,y)
{
    return x/y
}

console.log(add(2,5));
console.log(subtract(2,2));
console.log(multiply(4,5));
console.log(divide(2,3));

function IsEven(number)
{

if(number%2 === 0)
{
    return true;
}
else{
    return false;
}
}

console.log(IsEven(56));

function IsEven2(number)
{
   return number%2 === 0 ? true : false;
}

console.log(IsEven2(34));

function isValidEmail(email)
{
    if(email.includes("@"))
    {
      return true;
    }

    else{
        return false;
    }
}

console.log(isValidEmail("ABCgmail.com"));
console.log(isValidEmail("ABC@gmail.com"));

function isValidEmail2(email)
{

   return email.includes("@") ? true : false;
}

console.log(isValidEmail2("DEFgmail.com"));
console.log(isValidEmail2("DEF@gmail.com"));
