exports.at = at;

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;
const MILLIS_IN_A_MINUTE = 60 * 1000;
const MILLIS_IN_AN_HOUR = MINUTES_IN_AN_HOUR * MILLIS_IN_A_MINUTE;
const MILLIS_IN_A_DAY = HOURS_IN_A_DAY * MILLIS_IN_AN_HOUR;

function convertPos(time, maxVal){
    time %= maxVal;
    time += maxVal;
    return time;
}

function at(hours, minutes){
    minutes = minutes || 0;
    
    hours = convertPos(hours, HOURS_IN_A_DAY);
    minutes = convertPos(minutes, MINUTES_IN_A_DAY);
    
    var millis = (hours * MILLIS_IN_AN_HOUR) + (minutes * MILLIS_IN_A_MINUTE);

    millis = convertPos(millis, MILLIS_IN_A_DAY);

    var clock = {};
    clock.valueOf = function(){
        return millis;
    }

    clock.toString = function(){
        let time = new Date(millis).toISOString().split("T")[1].split(":");
        return `${time[0]}:${time[1]}`;
    }

    clock.plus = function(minutes){
        millis += minutes * MILLIS_IN_A_MINUTE;
        return clock; 
    }

    clock.minus = function(minutes){
        millis -= minutes * MILLIS_IN_A_MINUTE;
        return clock;
    }

    clock.equals = function(other){
        return +clock === +other;
    }

    return Object.create(clock);
};