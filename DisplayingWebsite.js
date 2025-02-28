//  For displaying on a website.
 
let firstname = "Ethan Nathaniel";
let email = "ethan.nathaniel201@gmail.com";

let offline = false;
let fullname = "T Ethan Nathaniel";
let inschool = true;



 document.getElementById("p1").textContent = firstname;
 document.getElementById("p2").textContent =email;
 document.getElementById("p3").textContent = offline;

 document.getElementById("p4").textContent = `Your name is ${fullname}`;
 document.getElementById("p5").textContent = `Are you enrolled in school : ${inschool}`;



