var i=1;
var factorial=1;
while(i<=10){
    factorial=factorial*i;
    i++;
}
 console.log(factorial);

//  using function
function factorial(n){
    var i=1;
    var fact=1;
    while(i<=n){
     fact=fact*n;
    i++;
    }
    return fact;
}
var result=factorial(10);
console.log(result);