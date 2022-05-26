const repeatString = function(String, num) {
    let repeats = String;

    for (i=1; i < num; i++) {
        repeats=repeats+String;
    }

    return repeats;
};

// Do not edit below this line
module.exports = repeatString;
