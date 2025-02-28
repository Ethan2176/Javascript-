// How to accept user input in Javascript 

// 1. easy way - window prompt

// 2. html textbox is the professional way

1.
 let username = window.prompt("What is your user name");

console.log(username);

// 2.
let username1;

document.getElementById("MySubmit").onclick = function(){
 
username1 = document.getElementById("MyText").value
document.getElementById("myh1").textContent = `Hello ${username1}`
console.log(username1);
}