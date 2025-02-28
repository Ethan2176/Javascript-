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

let Number = 0;

const Press = document.getElementById("MyButton");

Press.onclick = function(){
    Number = Math.floor(Math.random()*51)+50 ;
    document.getElementById("label2").textContent = Number;

};