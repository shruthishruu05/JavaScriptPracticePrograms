let number1 = 121;
let number2 = 151;

function arePalindromes(number1 , number2){
    let reverse = 0,remainder;
    while(number1 > 0){
        remainder = number1 % 10;
        reverse *= 10;
        reverse += remainder;
        number1 = Math.floor(number1/10);
    }
    if(reverse == number2) return true;
    return false;
}

console.log("first number: "+ number1+ "  second number: "+ number2);
console.log("check if palindrome : "+ arePalindromes(number1,number2));