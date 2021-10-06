let repeatedDigitArray = new Array();

function checkForPalindrome(number) {
    let reverseNumber = number.toString().split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    }
    else {
        return false;
    }
}

for(let index = 0 ; index <= 100 ; index++){
    if(index >= 11 && checkForPalindrome(index))
        repeatedDigitArray.push(index);
}

console.log("The Repeated numbers are : " + repeatedDigitArray);