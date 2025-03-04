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

//  Better way

const Temp2 = 25;

if(Temp2>0 && Temp2<=30){
    console.log(`The weather is good`);
}

else {
    console.log(`The weather is bad`);
}







