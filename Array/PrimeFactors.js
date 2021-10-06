
    var num = 15;
    let array = new Array();
    for(var i = 2;i<=num;i++)
    {
        while(num%i==0)
        {
            array.push(i);
            num = num/i;
        }
    }
    for(let i =0;i<array.length;i++)
    {
    console.log(array[i]+ " ");
    }








