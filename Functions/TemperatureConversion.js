function FarenheitToCelcius(temp) {
    return (t - 32) * 5 / 9;
}

function CeciusToFareheit(temp) {
    return (t * 9 / 5) + 32;
}
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let temperature = 200;

readLine.question(' choose any option among the two 1. Farenheit to Celcius 2. Celcius to Farenheit', choice => {
    switch (Number(choice)) {
        case 1: 
        if (temperature >= 32 && temperature <= 212) {
            console.log(FarenheitToCelcius(temperature));
        }
            break;
        case 2: 
        if (temperature >= 0 && temperature <= 100) {
            console.log(CeciusToFareheit(temperature));
        }
            break;
        default: 
        console.log("Wrong choice");
    }
    readLine.close();
});