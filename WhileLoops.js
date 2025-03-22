// while loop - repeats a block of code as long as a condition is satisfied

// 1.
// let username = "";

// while(username === ""){
//     console.log(`Empty`);
// }

// console.log(`Exited`);

// The above code will cause the message "Empty" to be printed an infinite number of times.

let username = "";

while(username === "" || username === null ){
    username = window.prompt(`Enter your name : `);
}

console.log(`Hello ${username}!`);

// Do while Loop
// the statement within the block of code will always 
// get executed atleast once.

let username1="Ethan";

do{
    username1 = window.prompt(`Enter your username again : `);
}while(username1 ==="" || username1 === null)

console.log(`Hello again ${username1}`);

let LoggedIn = false;
let username2;
let password;

while(!LoggedIn){
    username2 = window.prompt(`Enter a username to log in : `);
    password = window.prompt(`Enter your password to log in : `);

    if(username2 ==="myusername" && password ==="mypassword")
    {
        LoggedIn = true;
        console.log(`You are logged in : `);
    }
    else{
        console.log(`Invalid Log In Attempt`);
    }

}

// This loop will keep on going and will not stop as long as log in does not occur 
// or in this case , when the username and password do not match the ones shown in the if condition.

/*This same program in a do while loop will allow for the
loop body to be executed even when the condition is not met. */

