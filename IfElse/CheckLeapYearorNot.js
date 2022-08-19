var year = 2024;
if(year%4==0 || year%400==0 && year%100!=0)
console.log("Given year is a leap year");
else
console.log("Given year is not a leap year");