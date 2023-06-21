let score = 60;

function calulatescore(score){
    if (score >= 80 && score <=100) {
        return 'A';
    }
    else if (score >=70 && score <= 89){
        return 'B';
    }
    else if (score >= 60 && score <=69){
        return 'C';
    }
    else if (score >=50 && score <=59){
        return 'D';
    }
    else if(score >= 0 && score <= 49){
    return 'Sorry you are fail';
    }
    else {
        return 'Invalid score , please enter score between 0 to 100';
    }
}

const grade = calulatescore(score);

console.log(`the student's score is ${score} and grade is ${grade}`);