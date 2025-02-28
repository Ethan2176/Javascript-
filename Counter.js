// Counter Program 

const Decrease = document.getElementById("Decrease");
const Increase = document.getElementById("Increase");
const Reset = document.getElementById("Reset");
const countlabel= document.getElementById("countlabel");

let count = 0;

 Increase.onclick = function(){
     count++;
     countlabel.textContent = count;
 }

 Decrease.onclick = function(){
     count--;
     countlabel.textContent = count;
 }

 Reset.onclick = function(){
     count = 0;
     countlabel.textContent = count;
 }





