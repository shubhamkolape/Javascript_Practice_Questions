const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const max = Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log("maximum number is ", max);

const min = Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24);
console.log("Minimum number is ", min);


// find median age 👇

let age1 = ages.sort();


const middleIndex = Math.floor(age1.length / 2);
let medianAge;
if (age1.length % 2 === 0) {
  medianAge = (age1[middleIndex - 1] + age1[middleIndex]) / 2;
} else {
  medianAge = age1[middleIndex];
}


console.log("The median age is " + medianAge);


// find avarge age 👇


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sum = 0;

for (let i = 0; i < ages.length; i++){
  sum =  sum + ages[i];
}



let avargeage = sum / ages.length;

console.log(`the avarage age is ${avargeage}`);


 
// Find the range of the ages(max minus min) 👇


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const range = max - min;

console.log(`The range of ages is (max minus min) is =   ${range}`);



// Compare the value of (min - average) and (max - average), use abs() method  👇


let diffmin = Math.abs(min - avargeage);

let diffmax = Math.abs(max - avargeage);

if ( diffmin > diffmax){
  console.log("The difference between minimum age and avarge is greater than the difference between maximum age and avarge age  ");
}
else if ( diffmin < diffmax) {
  console.log("The difference between maximum age and avarge is greater than the difference between minimum age and avarge age  ");
}
else{
  console.log("The difference between maximum age and avarge is equal to the difference between minimum age and avarge age  ");
}








    
   

