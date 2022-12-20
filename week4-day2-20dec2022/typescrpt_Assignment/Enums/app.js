// create an enum Weekdays --all days
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 0] = "Monday";
    weekdays[weekdays["Tuesday"] = 1] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 2] = "Wednesday";
    weekdays[weekdays["Thursday"] = 3] = "Thursday";
    weekdays[weekdays["Friday"] = 4] = "Friday";
    weekdays[weekdays["Saturday"] = 5] = "Saturday";
    weekdays[weekdays["Sunday"] = 6] = "Sunday";
})(weekdays || (weekdays = {}));
;
// create a arrray daysOff with two off days
let daysOff = [weekdays.Monday, weekdays.Saturday];
// create a function convertTemperature(temp:number,fromTo:string):number{}
// eg: convertTemperature(70,'FToC') c
function convertTemperature(temp, from, to) {
    let res;
    // C = [(°F-32)×5]/9
    if (from === "f" && to === "c") {
        res = ((temp - 32) * 5) / 9;
        return res;
    }
    else if (from === "c" && to === "f") {
        res = ((temp * 9) / 5) + 32;
        return res;
    }
    else {
        return 'error';
    }
}
let ans = convertTemperature(32, "f", "c");
console.log(`32 Fahreneit = ${ans} Celcius`);
ans = convertTemperature(0, "c", "f");
console.log(`0 Celcius = ${ans} Fahreneit`);
var Direction;
(function (Direction) {
    Direction["North"] = "north";
    Direction["South"] = "south";
    Direction["East"] = "eats";
    Direction["West"] = "west";
})(Direction || (Direction = {}));
function move(dir) {
    console.log(dir);
}
move(Direction.East);
export {};
