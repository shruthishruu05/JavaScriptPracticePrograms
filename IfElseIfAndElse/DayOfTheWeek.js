let numberGenerated = (Math.floor(Math.random() * 10) % 7 ) + 1;

console.log("the Number generated is : "+ numberGenerated);

if(numberGenerated == 1)
    console.log("SUNDAY");
else if(numberGenerated == 2)
    console.log("MONDAY");
else if(numberGenerated == 3)
    console.log("TUESDAY");
else if(numberGenerated == 4)
    console.log("WEDNESDAY");
else if(numberGenerated == 5)
    console.log("THURSDAY");
else if(numberGenerated == 6)
    console.log("FRIDAY");
else
    console.log("SATURDAY");