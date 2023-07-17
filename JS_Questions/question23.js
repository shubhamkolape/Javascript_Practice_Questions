let Num = 19;

if (Num == 1) {
    console.log(`nai prime number`);
}

else if (Num % 2 === 0){
    console.log(`nai prime`);
}
else{
    for(i = 3; i <= Math.sqrt(Num); i += 2){
        if(Num % i === 0){
            console.log(`nai`);
        }
        else{
            console.log(`aahe`);
        }
    }

}

    
