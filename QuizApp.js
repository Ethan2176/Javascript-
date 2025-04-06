const Submit = document.getElementById("MySubmit");
const SubmitQ1 = document.getElementById("MySubmitQ1");
const InputQ1 = document.getElementById("MyInputQ1");

/*check if the element exists
 This prevents errors even if the element is missing (e.g., you're on a different page). */


if(Submit){ 
Submit.addEventListener("click",function(){
    window.location.href = "QuizPage.html";
});
}
let Score = 0;

//.addEventListner -> when someone clicks this button run this function
// window.location.href -> When someone clicks this button take me to a page mentioned

// window.location.href -> is like typing a url into the browsers address bar

if(SubmitQ1){
SubmitQ1.onclick = function()
{
    
    if(InputQ1.value == 3 )
    {
       Score+=1;
       console.log(Score);

    }
    SubmitQ1.disabled = true;

}
}
