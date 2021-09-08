var current_date = new Date();
var current_day = current_date.getDay();
var current_hour = current_date.getHours();
const hours = [];
const schedule = [];
for (let i = 0; i < 10; i++ ){
    hours.push("");
}
const hours_with_lectures = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
              "twenty"];
Array.prototype.push.apply(hours, hours_with_lectures);

schedule[1] = {
        10: "ClassOne TUT",
        11: "ClassOne TUT",
        13: "ClassOne LEC",
        15: "ClassTwo LEC",
        16: "ClassTwo LEC"
};
schedule[2] = {
    15: "ClassThree LEC"
};
schedule[3] = {
    13: "ClassThree LEC",
    18: "ClassFour LEC",
    19: "ClassFour LEC",
    20: "ClassFour TUT"
};
schedule[4] = {
    15: "ClassOne LEC",
    16: "ClassOne LEC",
    17: "ClassOne LEC"
};
schedule[5] = {
    13: "ClassThree LEC"
};
var schedule_for_day = schedule[current_day]
for (var lecture in schedule_for_day){
    document.getElementById(hours[lecture]).innerHTML = schedule_for_day[lecture];
}
if (hours[current_hour]){
    document.getElementById(hours[current_hour]).id = "selected";
}


