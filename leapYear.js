var year=3688;
var remainder=3688%4;
if(remainder==0){
    console.log("the year is leap year");
}
else{
    console.log("the year is not leap yaar");
}
// akadik bar use korar jonno function diye korbo

function leapYear(year){
    const remainder=year%4;
if(remainder==0){
    console.log("the year is leap year");
    return true;
}
else{
    console.log("the year is not leap yaar");
    return false;
}

}

const checkLeapYear=leapYear(1799);
console.log(checkLeapYear);
