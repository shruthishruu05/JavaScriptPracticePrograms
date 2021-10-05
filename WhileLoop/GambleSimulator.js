let startingMoney=100;
let maximumAmout =200;
const minimumAmout = 0;
const betWon = 1;
const betLost =0;
let count = 0;
let numberOfWins = 0;
let amount;
let bet;
amount = startingMoney;
let betAmount =1;

function getResultOfGambling(){
    return Math.floor(Math.random() * 10) %2;
}

while(startingMoney<=maximumAmout && startingMoney>=minimumAmout){
     bet = getResultOfGambling();
     console.log(bet);
     count++;
    if(bet == betWon)
    {
        amount += betAmount;
        numberOfWins++;
    }
    else
    {
        amount -= betAmount;
    }
}
console.log("amount won: "+amount+"  number of wins: "+ numberOfWins+"  count: "+ count);