function printValue(digit)
{
    switch(digit){
        case '0' : console.log("zero");
        break;

        case '1':
            console.log("One ");
        break;
 
        case '2':
            console.log("Two ");
            break;

        case '3':
            console.log("Three ");
            break;
    
        case '4':
            console.log("Four ");
            break;

        case '5':
            console.log("Five ");
            break;
        case '6':
            console.log("Six ");
            break;
    
        case '7':
            console.log("Seven ");
            break;
    
        case '8':
            console.log("Eight ");
            break;
    
        case '9':
            console.log("Nine ");
            break;
    }
}



function printWord( number)
{
    var i;
    var length = number.length;
    for(i =0;i<length;i++)
    {
        printValue(number.charAt(i));
    }
}

let number = "1";
printWord(number);