let Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\|;:,.<>/?`~";
let Password="";
const Button = document.getElementById("MySubmit");
const Output = document.getElementById("MyLabel");
const Reset = document.getElementById("MyReset");

Button.onclick = function RandomPassword(value)
{ 
    value = window.prompt("Enter the length of your password");
    for(i = 0 ; i<value ; i++){
   Password += Characters.charAt(Math.trunc(Math.random()*Characters.length));
    }
    console.log(`Your Password is ${Password}`);
Output.textContent = `Your Password is ${Password}`;
}

Reset.onclick = function ResetWebsite()
{
    Password="";
    Output.textContent="";
}



