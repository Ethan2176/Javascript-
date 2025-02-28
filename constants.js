// Constants 

const PI = 3.14159; // Ensures that pi stays the same and doesnt change.
 let radius;
let circumference;

radius = window.prompt(`Enter the radius of the circle`);
radius = Number(radius);

circumference = 2*PI* radius;
document.getElementById("myh1").textContent = circumference;
console.log(circumference);