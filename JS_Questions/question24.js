let even = [];

let odd = [];

for ( i=0; i<= 100; i++){
    if (i % 2 === 0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}

console.log("Even number is ", even);
console.log("odd number is ", odd);