// Checked - property which determines the checked state of an
//           html checkbox or radio button element

const MyCheckBox = document.getElementById("MyCheckBox");

const VisaBtn = document.getElementById("VisaBtn");

const MasterCardBtn = document.getElementById("MasterCardBtn");

const PayPalBtn = document.getElementById("PayPalBtn");

const MySubmit = document.getElementById("MySubmit");

const SubResult = document.getElementById("SubResult");

const PayResult = document.getElementById("PayResult");


MySubmit.onclick = function(){
   if(MyCheckBox.checked){
         SubResult.textContent = `You are subscribed`;
   }

   else{
      SubResult.textContent = `You are not subscribed`;
   }

   if(VisaBtn.checked){
      PayResult.textContent = `You are paying with Visa`;
   }

   else if (MasterCardBtn.checked){
      PayResult.textContent = `You are paying with MasterCard`;

   }

   else if(PayPalBtn.checked){
      PayResult.textContent = `You are paying with Paypal`;

   }

   else{
      PayResult.textContent = `Please choose a payment type`;
   }
   










}