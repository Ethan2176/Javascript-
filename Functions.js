// A function is a section of reuseable code

function HappyBirthday(){
    console.log("Happy Birthday to you");
}

HappyBirthday();
HappyBirthday();

function Happybirthday2(Username){
    console.log(`Happy Birthday ${Username}`);
}

Happybirthday2("Ethan");

function Happybirthday3(Age , username)
{
    console.log(`Happy Birthday ${username} , you are ${Age} years old.`);
}

Happybirthday3(20,"ABC");

// return 

function add(x , y)
{
    let result = x + y;
    return result;
}

add(2,3);
console.log(add(2,3));

c = add(4,5);
console.log(c);