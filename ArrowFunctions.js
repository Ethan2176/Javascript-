/*Arrow functions 
A way to write functions you will only use once*/

// Function 
function hello()
{
    console.log("Hello");
}

// Function in a variable
const hello1 = function()
{
    console.log("hello");
}

// Arrow function 
const hello2 = () => console.log("hello");

hello();
hello1();
hello2();

const greeting = (Name , age) => {console.log(`Hello ${Name}`);
                           console.log(`You are ${age} years old`)};

greeting("Jennifer",19);

setTimeout(() => {console.log(`Hello`)
                  console.log(`Bro`)
}, 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2) )

console.log(squares);

const cubes = numbers.map((element) => Math.pow(element,3));

console.log(cubes);

const EvenNums = numbers.filter((element) => element%2===0);

console.log(EvenNums);

const OddNums = numbers.filter ((element) => element %2 !==0);

console.log(OddNums);

const total = numbers.reduce((accumulator,element) =>accumulator + element);

console.log(total);

