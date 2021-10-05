var readline = require('readline'); 
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Enter number1 : ', (a) => {
    rl.question('Enter number2 : ', (b) => {
        rl.question('Enter number3 : ', (c) => {
            number1= a + b * c;
            number2 = a % b + c;
            number3 = c + a/b;
            number4 = a * b + c;

            console.log("Minimum of all is: "+ Math.min(number1,number2,number3,number4));
            console.log("Maximum of all is: "+ Math.max(number1,number2,number3,number4));
            rl.close();
    });
    });
});