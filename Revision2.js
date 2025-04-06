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
    event.preventDefault();
    if(Selection.value === "Income")
    {
        TotalIncome += Number(Value.value);
        labelIncome.textContent = TotalIncome;
    }

    else if (Selection.value === "Expense")
    {
        TotalExpense += Number(Value.value);
        labelExpense.textContent = TotalExpense;
    }
     
    Remaining.textContent = TotalIncome - TotalExpense;


}

Reset.onclick = function()
{
    TotalIncome = 0;
    TotalExpense = 0;
    Value.value = "";
    labelIncome.textContent = "";
    labelExpense.textContent = "";
    Remaining.textContent = "";

}