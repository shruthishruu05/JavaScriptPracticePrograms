var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter  number ', (number) => {
    
        let result = 0.0;
 
        console.log("The harmonic series is: ");
        for (var i = number; i >0; i--) {
            result = result + 1 / i;
            console.log(result + ", ");
        }
        });