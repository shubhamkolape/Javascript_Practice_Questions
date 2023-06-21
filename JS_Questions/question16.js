

function getseason(month) {
    switch (month.toLowerCase()) {
        case "december":
        case "january":
        case "februvary":
                return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring";
        case "june":
        case "july":
        case "august":
            return "Summer";
        case "september" :
        case "october" :
        case "november" :
           return "Autumn";
         default:
            return "please enter valid month";
   }
}

const monthinput = 'july';

const season1 = getseason(monthinput);

console.log(`your month is ${monthinput} and season is ${season1}`);