const HEAD = 1;

function CoinToss(){
    return Math.floor(Math.random() * 10) % 2;
}

result = CoinToss();
console.log(result);

if(result == HEAD){
    console.log("HEADS");
}
else{
    console.log("TAILS");
}