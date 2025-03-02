// Switch - Can be an efficient way to replace many if else Statements.

let day = 1;

switch(day){
    case 1:
        console.log(`It's Monday`);
        break;

    case 2:
        console.log(`It's Tuesday`);
        break;

    case 3:
        console.log(`It's Wednesday`);
        break;

    case 4:
        console.log(`It's Thursday`);
        break;

    case 5:
        console.log(`It's Friday`);
        break;

    case 6:
        console.log(`Its Saturday`);
        break;

    case 7:
        console.log(`It's Sunday`);
        break;
}

let TestScore = 59;
let LetterGrade;

switch(true){
    case TestScore>=70:
    LetterGrade = `A`;
    break;

    case TestScore<70 && TestScore>=60:
    LetterGrade = `B`;
    break;

    case TestScore <60:
    LetterGrade = `C`;
    break;
}

console.log(`${LetterGrade}`); // We can use this or even console.log(LetterGrade);

