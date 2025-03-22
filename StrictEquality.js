// = assignment operator
// == comparison operator
// === strict equality operator (compares both value and datatype)
// != inequality operator
// !== strict inequality operator

// Here we are only comparing values.
const PI=3.14;

if(PI=="3.14"){
    console.log("PI");
}
else{
    console.log("Not PI");
}

/*Here we are comparing not only datatypes but also
the values*/

if(PI==="3.14"){
    console.log("PI");
}
else{
    console.log("Not PI");
}

// Ineqaulity Operator
// Gives pi as a result as it is only comparing values.
if(PI !="3.14"){
    console.log("Not PI");
}

else{
    console.log("PI");
}

// Checks both datayypes and values.

if(PI !=="3.14"){
    console.log("Not PI");
}

else{
    console.log("PI");
}