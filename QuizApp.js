const Submit = document.getElementById("MySubmit");
const SubmitQ1 = document.getElementById("MySubmitQ1");
const InputQ1 = document.getElementById("MyInputQ1");
const Name = document.getElementById("MyName");
const Age = document.getElementById("MyAge");
const SubmitQ2 = document.getElementById("MySubmitQ2");
const InputQ2 = document.getElementById("MyInputQ2");
const MyReset = document.getElementById("MyReset");
const SubmitQ3 = document.getElementById("MySubmitQ3");
const InputQ3 = document.getElementById("MyInputQ3");
const InputQ4 = document.getElementById("MyInputQ4");
const SubmitQ4 = document.getElementById("MySubmitQ4");
const SubmitQ5 = document.getElementById("MySubmitQ5");
const InputQ5 = document.getElementById("MyInputQ5");
const SubmitQ6 = document.getElementById("MySubmitQ6");
const InputQ6 = document.getElementById("MyInputQ6");
const SubmitQ7 = document.getElementById("MySubmitQ7");
const InputQ7 = document.getElementById("MyInputQ7");
const SubmitQ8 = document.getElementById("MySubmitQ8");
const InputQ8 = document.getElementById("MyInputQ8");
const SubmitQ9 = document.getElementById("MySubmitQ9");
const InputQ9 = document.getElementById("MyInputQ9");
const SubmitQ10 = document.getElementById("MySubmitQ10");
const InputQ10 = document.getElementById("MyInputQ10");

const NameLabel = document.getElementById("Myh1");


/*check if the element exists
 This prevents errors even if the element is missing (e.g., you're on a different page). */

//  Helps when script runs before browser has loaded html 

if(Submit){ 


Submit.addEventListener("click",function(){
     
    if(Name.value != "" && Age.value != "")
    {
        window.location.href = "QuizPage.html";
    }
   
});



}



let Score = parseInt((localStorage.getItem("Score"))) || 0;

//.addEventListner -> when someone clicks this button run this function
// window.location.href -> When someone clicks this button take me to a page mentioned

// window.location.href -> is like typing a url into the browsers address bar



if(SubmitQ1){
SubmitQ1.onclick = function()
{
    
    if(InputQ1.value === String(3) )
    {
       
       Score++;
       localStorage.setItem("Score",Score);
    }
    SubmitQ1.disabled = true;

    
    window.location.href="QuizPage2.html";
    

}
}


if(SubmitQ2)
{
   SubmitQ2.onclick = function(){
      if(InputQ2.value === String(2)){
       
        Score++;
        localStorage.setItem("Score",Score);
        Score = localStorage.getItem("Score");
         
        console.log(Score);
      }

     SubmitQ2.disabled = true;

     window.location.href ="QuizPage3.html";

   }
}

if(MyReset)
{
  MyReset.onclick = function(){
    Score = localStorage.setItem("Score",0);
  }

}

if(SubmitQ3)
    {
       SubmitQ3.onclick = function(){
          if(InputQ3.value === String(2)){
           
            Score++;
            localStorage.setItem("Score",Score);
            Score = localStorage.getItem("Score");
             
            console.log(Score);
          }
    
         SubmitQ3.disabled = true;

         window.location.href = "QuizPage4.html";
    
       }
    }


    if(SubmitQ4)
        {
           SubmitQ4.onclick = function(){
              if(InputQ4.value === String(4)){
               
                Score++;
                localStorage.setItem("Score",Score);
                Score = localStorage.getItem("Score");
                 
                console.log(Score);
              }
        
             SubmitQ4.disabled = true;
              
              window.location.href ="QuizPage5.html";
           }
        }


        if(SubmitQ5)
            {
               SubmitQ5.onclick = function(){
                  if(InputQ5.value === String(2)){
                   
                    Score++;
                    localStorage.setItem("Score",Score);
                    Score = localStorage.getItem("Score");
                     
                    console.log(Score);
                  }
            
                 SubmitQ5.disabled = true;
                  
                  window.location.href ="QuizPage6.html";
               }
            }

            if(SubmitQ6)
                {
                   SubmitQ6.onclick = function(){
                      if(InputQ6.value === String(3)){
                       
                        Score++;
                        localStorage.setItem("Score",Score);
                        Score = localStorage.getItem("Score");
                         
                        console.log(Score);
                      }
                
                     SubmitQ6.disabled = true;
                      
                      window.location.href ="QuizPage7.html";
                   }
                }

                if(SubmitQ7)
                    {
                       SubmitQ7.onclick = function(){
                          if(InputQ7.value === String(4)){
                           
                            Score++;
                            localStorage.setItem("Score",Score);
                            Score = localStorage.getItem("Score");
                             
                            console.log(Score);
                          }
                    
                         SubmitQ7.disabled = true;
                          
                          window.location.href ="QuizPage8.html";
                       }
                    }
                    
                    if(SubmitQ8)
                        {
                           SubmitQ8.onclick = function(){
                              if(InputQ8.value === String(3)){
                               
                                Score++;
                                localStorage.setItem("Score",Score);
                                Score = localStorage.getItem("Score");
                                 
                                console.log(Score);
                              }
                        
                             SubmitQ8.disabled = true;
                              
                              window.location.href ="QuizPage9.html";
                           }
                        }

                       if(SubmitQ9)
                        {
                           SubmitQ9.onclick = function(){
                              if(InputQ9.value === String(2)){
                               
                                Score++;
                                localStorage.setItem("Score",Score);
                                Score = localStorage.getItem("Score");
                                 
                                console.log(Score);
                              }
                        
                             SubmitQ9.disabled = true;
                              
                              window.location.href ="QuizPage10.html";
                           }
                        }

                        if(SubmitQ10)
                            {
                               SubmitQ10.onclick = function(){
                                  if(InputQ10.value === String(4)){
                                    Score++;
                                    localStorage.setItem("Score",Score);
                                    localStorage.getItem("Score");
                                    console.log(Score);
                                  }
                            
                                 SubmitQ10.disabled = true;

                                 
                               }
                              }
                                  
                                 
                                 
   
                               
                            
               
                
                

            

