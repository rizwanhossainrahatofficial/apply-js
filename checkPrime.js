function isPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return "is a prime number";
        }
    }
    return "is not a prime";
}
var result=isPrime(127);
console.log(result);