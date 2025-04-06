/*Objective: Create a web-based application that 
allows users to track their income and expenses.
Users can add income and expenses, and the application
will calculate the remaining budget, total income, 
total expenses, and provide feedback on whether they are within their budget. */

const Value = document.getElementById("MyValue");
const Submit = document.getElementById("MySubmit");
const Reset = document.getElementById("MyReset");
const Selection = document.getElementById("MySelect");
const labelIncome = document.getElementById("TotalIncome");
const labelExpense = document.getElementById("TotalExpense");
const Remaining = document.getElementById("Remaining");
let TotalIncome = 0;
let TotalExpense = 0;


Submit.onclick = function(event)
{
    event.preventDefault(); // prevents page from refreshing , keeping information same 
    if(Selection.value === "Income")
    {
        TotalIncome += Number(Value.value);  // value is originally a string so we are converting it to a number to add
        labelIncome.textContent = `Total Income : ${TotalIncome}`;
    }

    else if (Selection.value === "Expense")
    {
        TotalExpense += Number(Value.value);
        labelExpense.textContent = `Total Expenses: ${TotalExpense}`;
    }
     
    Remaining.textContent = `Remaining Budget : ${TotalIncome - TotalExpense}`;


}

Reset.onclick = function()
{
    TotalIncome = 0;
    TotalExpense = 0;
    Value.value = "";
    labelIncome.textContent = "Total Income : ";
    labelExpense.textContent = "Total Expenses : ";
    Remaining.textContent = "Remaining Budget : ";

}