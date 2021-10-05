var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);

rl.question('Enter  number ', (number) => {

    var i,flag=0;            
    if(number==0||number==1){  
     console.log(number+" is not prime number");      
    }
    else{  
     for(i=2;i<=number/2;i++){      
      if(number%i==0){      
       console.log(number+" is not prime number");      
       flag=1;      
       break;      
      }      
     }      
     if(flag==0)  { console.log(number+" is prime number"); }  
    }
});