var array = [300,100,200,150,400];
const size = array.length;
console.log("the size of the array is " +size);
let maximum = array[0];
let minimum = array[0];

for(var index =1;index<size;index++)
{
    if(array[index]>maximum)
    {
        maximum = array[index];
    }
    if(array[index]< minimum)
    {
        minimum = array[index];
    }
}
console.log("Maximum element is "+maximum);
console.log("Minimum element is "+minimum);

