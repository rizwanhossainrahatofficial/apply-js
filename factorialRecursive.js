// kono akta function ar bitor thake jodi oi function k call kora hoi tobe take recursive function bole
// stop condition lagbe
// nije nijeke k call korbe

// 0!=1
// 1!=1
// 2!=1*2
// 3!=1*2*3
// 4!=1*2*3*4*5
// 5!=(5-1)!*5
// n!=n(n-1)*n


function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

var result=factorial(10);
console.log(result);