/*Question:
Create a simple HTML page that displays a user-defined string. 
The page should allow the user to input a string, and upon submission, it should:

Use method chaining to manipulate the string.
Switch the case of the string (e.g., from uppercase to lowercase and vice versa).
Slice the string to display only a portion of it.
Use a ternary operator to check if the string is empty and display a corresponding message.
Requirements:
Color Scheme: Use a light blue background with dark blue text for good contrast.
Font: Use a sans-serif font like Arial or Helvetica for a clean and modern look.*/





const Submit = document.getElementById("mysubmit");

Submit.onclick = function(){
    let Input = document.getElementById("myinput").value;
    Input = Input.trim().charAt(0).toUpperCase() + Input.trim().slice(1).toLowerCase();
    document.getElementById("mylabel").textContent = Input;
    console.log(Input);
}
