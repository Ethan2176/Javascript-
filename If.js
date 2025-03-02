// If statements in Javascript

let age = 19;

if(age>=18){
    console.log(`You can enter this place`);
}

else{
    console.log(`You cannot enter this place`);
}

// Since age is 19 and 19 is greater than 18 , the if statement will hold true.
// The output will be "You can enter this place"

// One
let time = 9;

if(time<12){
    console.log(`Good Morning`);
}

else{
    console.log(`Good Afternoon`);
}

// Two
let IsStudent = false;

if(IsStudent){
    console.log(`You are a student`);
}

else{
    console.log(`You are not a student`);
}

// Nested If (Three)
let age1 = 22;

let HasLicense = false;

if(age1>=16){
    console.log("You are old enough to drive.");
    if(HasLicense){
        console.log(`You have a License`);
    }
    else{
        console.log(`You do not have a License`);
    }
}

else{
    console.log("You are not old enough to have a license.");
}

// if , else if and else (Five)

let age2 = 0;

if(age2>=18){
    console.log("You are old enough to enter this site");
}

else if(age2==0){
    console.log("You cannot enter , you were just born");
}

else if(age2 < 0){
    console.log("Your age cannot be negative");
}

else if (age2>=100){
    console.log("You are too old");
}

else{
    console.log("You must be 18 or older");
}

// Here even though age is 101 , the output will be for age2>=18
// This is because it satisfies the first condition.
// The order of conditions matter , the first one which which gets satisfied is executed.

