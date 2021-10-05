
var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter  number ', (number) => {
    var power;                                             
       var number;                                                                                                
       console.log(" 2 to power n\n");    
       p = 1;                                                      
       for (power = 0; power <= number ; power++) 
              
       {                                                           
           if (number == 0)   
           {                                          
              power = 1;  
              console.log(power+ ":" +power);  
           }                                           
           else                                                    
                                               
              console.log(power+ ": " +Math.pow(2,power));                 
       }                           
    rl.close();
});