/*Function expression = assign a function to a variable 
or pass it as a parameter to another function  */

const hello = function() // function stored in a variable 
{
    console.log("Hello");
}

hello(); // calling the function stored in a variable.

// passing function as a parameter

setTimeout(function()
{
    console.log("hello");
} , 3000)


const Hi = function Hi() // defining function as a variable.
{
    console.log("Hi");
}

// passing defined function as a parameter.

setTimeout(Hi,2000);

//  Using function declaration

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);

function square(element)
{
  return Math.pow(element,2);
}

console.log(squares);

// Using function expressions

const squares2 = numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares2);

const Cubes = numbers.map(function(element2){
    return Math.pow(element2,3);
});

console.log(Cubes);

const EvenNums = numbers.filter(function(element){
    return element % 2 === 0 ? element : 0;
});

console.log(EvenNums);

const OddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(OddNums);

const Total = numbers.reduce(function(accumulator,element){
    return accumulator + element;
});

console.log(Total);


