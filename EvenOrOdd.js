const Button = document.getElementById("MyButton");
const Label = document.getElementById("label1");

let number = 0;

Button.onclick = function(){
    number = Math.floor(Math.random()*6)+1;
    
    if(number%2==0){
        Label.textContent = `${number} And Is Even`;
    }
    else{
        Label.textContent = `${number} And Is Odd`;
    }

}