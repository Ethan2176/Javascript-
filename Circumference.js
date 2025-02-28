let radius;
let circumference;
document.getElementById("Calculate").onclick = function(){
 
    radius = document.getElementById("Radius").value;
    radius = Number(radius);
    circumference = 2 *3.14* radius;
    document.getElementById("myh1").textContent = circumference;
}