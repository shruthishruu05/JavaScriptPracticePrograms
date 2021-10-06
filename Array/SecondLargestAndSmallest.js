let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

function generateRandomNumber(){
    return Math.round(Math.random() * 899 + 100);
}

console.log("The Generated Array is:")
for (let index = 0 ; index < 10 ; index++){
    numberArray.push(generateRandomNumber());
    console.log(numberArray[index] + " ");
}

numberArray.sort();
var limit =10;
console.log("The sorted array is ");
for (let index = 0 ; index < limit ; index++){
    numberArray.push(generateRandomNumber());
    console.log(numberArray[index] + " ");
}

console.log("Second Largest element is "+numberArray[limit-2]);  
console.log("Second Smallest element is "+numberArray[1]);