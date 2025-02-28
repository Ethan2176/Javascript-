// Random Number generator 

const min = 50;
const max = 100;


let RandomNum = Math.floor(Math.random()*(max-min+1)) + min ;

console.log(RandomNum);

// In this case Math.floor() gives us a numbersuch that its [0,1) , 0 is included but 1 is not included.

/*When we write max-min+1 we get 100-50+1 which is 51
When we multiply 51 with 0 we get 0 , 51x0 = 0
When we multiply 51 with 0.99 we get 50.49 , 51x0.99=50.49*/

// When we use Math.floor() we round off to the lesser value and get 0 and 50 respectively.

// If we add 50 to 0 we get 50
// If we add 50 to 50 we get 100

// For all other values we will get between 50 and 100.

let Number1 = 0;
let Number2 = 0;
let Number3 = 0;
let Average = 0;


const Press = document.getElementById("MyButton");
const Text1 = document.getElementById("label2");
const Text2 = document.getElementById("label4");
const Text3 = document.getElementById("label6");
const Text4 = document.getElementById("label7");

Press.onclick = function(){
    
    Number1 = Math.floor(Math.random()*51)+50 ;
    Text1.textContent = Number1;
    
    Number2 = Math.floor(Math.random()*51)+50;
    Text2.textContent = Number2;

    Number3 = Math.floor(Math.random()*51)+50;
    Text3.textContent = Number3;

    Average = Math.trunc((Number1 + Number2 + Number3)/3);

    Text4.textContent = Average;
};

