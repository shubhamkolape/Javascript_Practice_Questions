for(i = 2; i<= 100; i++){
    isPrime = true;

    if(i === 2){
        console.log(i);
    }

    for(j = 2; j < i ; j++ ){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(i);
    }
}