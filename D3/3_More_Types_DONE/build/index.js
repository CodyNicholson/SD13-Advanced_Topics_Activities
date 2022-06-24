"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
function myDay(scheduled) {
    scheduled <= 5 ? console.log("weekday") : console.log("weekend");
}
myDay(Days.Saturday);
// Same functionality using a switch statement and higher order function.
function myDay1(day) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (days.includes(day)) {
        return day;
    }
    else {
        return 'Error';
    }
}
// higher order function, takes function as an argument
function myDay2(myDay1) {
    switch (myDay1) {
        case 'Saturday':
            console.log("weekend");
            break;
        case 'Sunday':
            console.log("weekend");
            break;
        case 'Error':
            throw Error(`did not enter a day of the week`);
        default:
            console.log("weekday");
    }
}
myDay2(myDay1('Monday'));
