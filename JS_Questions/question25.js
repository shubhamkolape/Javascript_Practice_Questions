 let weight = 90;

 let height = 5.4;

let height1 = height * 0.3048;  // convert height from feet into meter

function CalculateBMI (weight, height1){
    return weight / (height1 * height1)   ;
}

let BMI = CalculateBMI(weight, height1);

console.log(BMI);

if( BMI < 18.5){
    console.log(' you are Underweight');
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log(' you are Normal weight');
}
else if(BMI >= 24.9 && BMI <=29.9){
    console.log(' you are Overweight')
}
else if(BMI >= 30){
    console.log('you are in shape')
}
