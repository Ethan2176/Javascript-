const Button = document.getElementById("MySubmit");
const Age = document.getElementById("MyText");
const Message = document.getElementById("Myp1");

Button.onclick = function(){
   age = Age.value;
   age = Number(age);
   
if(age>=18){
    Message.textContent=`You are old enough to enter this site`;
}

else if(age==0){
    Message.textContent=`You cannot enter , you were just born`;
}

else if(age < 0){
   Message.textContent = `Your age cannot be negative`;
}

else if (age>=100){
    Message.textContent = `You are too old`;
}

else{
   Message.textContent = `You are not old enough`;
}



}