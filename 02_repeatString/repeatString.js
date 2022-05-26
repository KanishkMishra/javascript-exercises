const repeatString = function(String, num) {
    let repeats = String;

    for (i=1; i < num; i++) {
        repeats=repeats+String;
    }

    if (num<0) repeats="ERROR";
    if (num==0) repeats="";

    return repeats;
};

// Do not edit below this line
module.exports = repeatString;
