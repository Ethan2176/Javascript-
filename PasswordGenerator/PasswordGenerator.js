let Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\|;:,.<>/?`~";
let Password="";
const Button = document.getElementById("MySubmit");
const Output = document.getElementById("MyLabel");
const Reset = document.getElementById("MyReset");
const Copy = document.getElementById("MyCopy")
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

Copy.onclick = function()
{
    navigator.clipboard.writeText(Password)
    .then(function() {
        // Alert the user that the text has been copied
        alert('Text copied to clipboard: ' + Password);
    })
    .catch(function(err) {
        console.error('Failed to copy: ', err);
    });
};





