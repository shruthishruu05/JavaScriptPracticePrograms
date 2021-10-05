let year = 2000;
if(year>=1000 && year<=9999)
{
    console.log("given year is of 4 digit")

    if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
    {
        console.log(year+" IS A LEAP YEAR");
    }
    else 
    console.log(year+" IS NOT A LEAP YEAR");
}
else {
    console.log("year shoul contain 4 digit");
}
