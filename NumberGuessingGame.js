//  Number Guessing game 

let number = Math.floor((Math.random()*100))+1;
console.log(number);

const Submit = document.getElementById("mysubmit");

Result = document.getElementById("myh2");
Guesses = document.getElementById("myh22");
let i = 1;

while(i<=10)
{
  let guessesleft=10;
  Submit.onclick = function()
  {
    
     Input = document.getElementById("myinput").value;
     Input=Number(Input);
     switch(true)
     {
       case number===Input:
        Result.textContent = "You Guessed Right.";
        break;

        case number>Input:
        Result.textContent ="Too Low!";
        break;

        case number<Input:
            Result.textContent ="Too High!";
            break;
       }
       guessesleft--;
       Guesses.textContent=`You have ${guessesleft} guesses left.`;
       if(guessesleft<0)
       {
        Guesses.textContent="No more guesses left.";
       }
       
    }
    
   i++;
    
   
}



