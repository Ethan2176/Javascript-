// Logical Operators 

/*Used to combine or manipulate Boolean Values*/

// and -- && 
// OR -- ||
// NOT -- !

const Temp = 20;

if(Temp >0){
    console.log(`The weather is good`);
}

else if(Temp<=30) {
    console.log(`The weather is good`);
}

else{
    console.log(`The weather is bad`);
}

 /*We only want to output the weather is good , when the temp
 falls between 0 and 30 */

//  Better way using "and"

const Temp2 = 25;

// Here we are using "and" :
// True if both statements are true and false if even one is flase.
if(Temp2>0 && Temp2<=30){
    console.log(`The weather is good`);
}

else {
    console.log(`The weather is bad`);
}

// using "or"
// Here we are using "or" operator 
// it holds true when both are true and false if even one is false.
const temp3 = 200;

if(temp3>0 || temp3<=45){
    console.log(`The temperature is good`);
}
else{
    console.log(`The temperature is bad`);
}

// not 
// It can flip booleans from true to false and vice versa.
const isSunny = true;

if(!isSunny){
    console.log(`It is Cloudy`);
}

else{
    console.log(`It is Sunny`);
}







