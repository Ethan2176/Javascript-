// for loop - repeat a block of code a certain number of times.

for(let i = 0; i<=10; i++ ){
if(i==4){
    continue; // skips iteration
}
else{
    console.log(`Jennifer ${i}`);
}

   
}

for(j =2; j<=12 ; j+=2){

    if(j==2){
        break;  // breaks out of the for loop
    }
    console.log(`${j}`);
}

console.log(`Done`);