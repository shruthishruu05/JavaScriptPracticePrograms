let DierollMap = new Map();
stopLimit = 10;
count =1;
max = 1;
min = 10;
maxValue = 0;
minValue =0;
function RollDie() {
    let value = Math.floor(Math.random() * 6 + 1);
    console.log("Die Result: " + value);
    return value;
}

while(count<stopLimit)
{
 let value = RollDie();
 if(DierollMap.has(value))
 {
    count = DierollMap.get(value) + 1;
 }
 DierollMap.set(value,count);
}

console.log(DierollMap);

for ([key, value] of DierollMap.entries()) 
{
    if(value >=max)
    {
        max =value;
        maxValue = key;
    }
    if(value<=min)
    {
        min =value;
        minValue =key;
    }
}
console.log("the number with minimum and maximum count are : "+minValue+ " , " +maxValue);


