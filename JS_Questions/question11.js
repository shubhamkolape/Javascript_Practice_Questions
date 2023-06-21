// Use the Date object to do the following activities


//     - What is the year today?
            let now = new Date;
            let CurrentYear = now.getFullYear();
            console.log(`The current year is ${CurrentYear}`);

//     - What is the month today as a number?
            let month = new Date;
            let Currentmonth = month.getMonth() + 1;
            console.log(`The current month is ${Currentmonth}`);


//     - What is the date today?
            let date1 = new Date;
            let Currentdate1 = date1.toDateString();
            console.log(`The current date is ${Currentdate1}`);


//     - What is the day today as a number?
            let date = new Date;
            let CurrentDate = date.getDate();
            console.log(`The current date is ${CurrentDate}`);


//     - What is the hours now?

            let hours = new Date;
            let CurrentHours = hours.getHours();
            console.log(`The current hours is ${CurrentHours}`);

            
//     - What is the minutes now?
            let mint = new Date ;
            let Currentmint = mint.getMinutes();
            console.log(`The current minutes is ${Currentmint}`);

            

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

            let second = Date.now() / 1000;
            console.log(second);
