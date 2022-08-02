 var factorial=1;
 for(i=1; i<=10;i++){
     var factorial=factorial*i;
     console.log(i,factorial);
 }

// bar bar korar jonno function diye korte hoeb

function factorial(n){
    var factorial=1;
    for(i=1;i<=n;i++){
        factorial=factorial*i;
       
    }
    return factorial;
}

var result=factorial(10);
console.log(result);