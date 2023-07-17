
  
function getDaysInMonth(month, year) {
  
    const adjustedMonth = month - 1; 
    const date = new Date(year, adjustedMonth + 1, 0); 
    return date.getDate();
  }

console.log(getDaysInMonth(2,2023));


// hello sir i am trying to solve a js problem "Write a program which tells the number of days in a month." in that problem i can not figure out the Data constructor, can you please explain me 