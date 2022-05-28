const fibonacci = function(index) {
    let t = 1;
    let f1 = 1;
    let f2 = 0;
    for (let i = index; i > 1; i--) {
        t = f1;

        f1 = f1+f2;

        f2 = t;
    }
    return f1;
};

// Do not edit below this line
module.exports = fibonacci;
