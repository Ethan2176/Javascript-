// Ternary Operator - shortcut to if and else statements
//                    helps to assign a variable based on condition
//                    condition ? CodeTrue : CodeFalse;

// 1
let age = 21;
let message = age >=18 ? "You are an adult":"You are a minor";

 console.log(`${message}`); // Both of the above can be used , when using in a statement then we will use ${}.
 console.log(message); 

// 2
let time = 16;

let greeting = time < 12 ? `Good Morning`:`Good afternoon`;

console.log(greeting);

// 3
let IsStudent = true;

let message1 = IsStudent ? `You are a student`:`You are not a student`;

// 4
let PurchaseAmt = 125;

let Discount = PurchaseAmt >=100 ? 10:0;

let FinalPrice = Discount=10 ? PurchaseAmt-((10/100)*PurchaseAmt) : PurchaseAmt;

console.log(`The price to be paid is $${FinalPrice}`);

let StudentFees = 400;

let ScholarshipPercentage = StudentFees >=350 ? 20 : 0;

let FinalFees = ScholarshipPercentage=20 ? StudentFees-((20/100)*StudentFees): StudentFees;

console.log(`The final fees are $${FinalFees}`);



