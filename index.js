// create a function that will check the given time and return remaining time to fixed timespane 

const STARTDAY = 1; // MONDAY
const ENDDAY = 5; // FRIDAY
const STARTHOURS = 10; // 10:00  10 AM
const ENDHOURS = 19; // 19:00   07 PM


const calDays = (days) => {
    return (days - (ENDDAY - 1)) < 0 ? 0 : (7 - days);
}

const calHours = (hours) => {
    return (hours >= STARTHOURS) ? (23 - hours) + STARTHOURS : (STARTHOURS - 1) - hours;
}

const calMiutes = (minutes) => {
    return 60 - minutes;
}

const checkTime = (timeStr) => {
    let resultStr = false;

    const hours = timeStr.getHours();
    const minutes = timeStr.getMinutes();
    const days = timeStr.getDay();

    let resHours = 0;
    let resMinutes = 0;
    let resDays = 0;

    if (days >= STARTDAY && days < ENDDAY) {
        if (hours < STARTHOURS || hours >= ENDHOURS) {
            if (calMiutes(minutes) == 60) {
                resHours += 1;
            } else {
                resMinutes = calMiutes(minutes);
            }

            if (calHours(hours) == 24) {
                resDays += 1;
            } else {
                resHours += calHours(hours);
            }

        } else {
            resultStr = true;
        }
    } else {
        if (calMiutes(minutes) == 60) {
            resHours += 1;
        } else {
            resMinutes = calMiutes(minutes);
        }

        if (calHours(hours) == 24) {
            resDays += 1;
        } else {
            resHours += calHours(hours);
        }

        if (resHours >= 10) {
            resDays += calDays(days);
        } else {
            if (days == 0) {
                resDays += 1; 
            } else {
                resDays += calDays(days - 1); 
            }       
        }
    }

    if (resultStr) {
        return "OPEN";
    } else {
        return "CLOSED " + resDays + " Days " + resHours + " Hours " + resMinutes + " MINUTES " + "TIME REMAINING";
    }
}


console.log("MONDAY -> ");
console.log(checkTime(new Date(2022, 7, 1, 4, 30, 4, 567)));  //Mon Aug 01 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 1, 10, 30, 4, 567)));  //Mon Aug 01 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 1, 19, 30, 4, 567)));  //Mon Aug 01 2022 19:30:04 

console.log("TUESDAY -> ");
console.log(checkTime(new Date(2022, 7, 2, 4, 30, 4, 567)));  //Tue Aug 02 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 2, 10, 30, 4, 567)));  //Tue Aug 02 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 2, 19, 30, 4, 567)));  //Tue Aug 02 2022 19:30:04 

console.log("WEDNESDAY -> ");
console.log(checkTime(new Date(2022, 7, 3, 4, 30, 4, 567)));  //Wed Aug 03 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 3, 10, 30, 4, 567)));  //Wed Aug 03 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 3, 19, 30, 4, 567)));  //Wed Aug 03 2022 19:30:04 

console.log("THURSDAY -> ");
console.log(checkTime(new Date(2022, 7, 4, 4, 30, 4, 567)));  //Thu Aug 04 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 4, 10, 30, 4, 567)));  //Thu Aug 04 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 4, 19, 30, 4, 567)));  //Thu Aug 04 2022 19:30:04  

console.log("FRIDAY -> ");
console.log(checkTime(new Date(2022, 7, 5, 4, 30, 4, 567)));  //Fri Aug 05 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 5, 10, 30, 4, 567)));  //Fri Aug 05 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 5, 19, 30, 4, 567)));  //Fri Aug 05 2022 19:30:04 

console.log("SATERDAY -> ");
console.log(checkTime(new Date(2022, 7, 6, 4, 30, 4, 567)));  //Sat Aug 06 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 6, 10, 30, 4, 567)));  //Sat Aug 06 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 6, 19, 30, 4, 567)));  //Sat Aug 06 2022 19:30:04 

console.log("SUNDAY -> ");
console.log(checkTime(new Date(2022, 7, 7, 4, 30, 4, 567)));  //Sun Aug 07 2022 4:30:04 
console.log(checkTime(new Date(2022, 7, 7, 10, 30, 4, 567)));  //Sun Aug 07 2022 10:30:04 
console.log(checkTime(new Date(2022, 7, 7, 19, 30, 4, 567)));  //Sun Aug 07 2022 19:30:04 

console.log(checkTime(new Date())); // now