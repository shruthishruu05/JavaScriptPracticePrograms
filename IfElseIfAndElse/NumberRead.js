var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

     
var number;

rl.question('Enter number ', (numInput) => {
    number = numInput;
    if(number == 1)
        console.log("unit");
    else if(number == 10)
        console.log("ten");
    else if(number == 100)
        console.log("hundred");
    else if(number == 1000)
    console.log("thousand");

});

