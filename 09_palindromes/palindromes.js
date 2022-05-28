const palindromes = function (string) {
    const original = string.replace(/[^a-z0-9]/gi,"").toLowerCase();

    const reverse = original.split("").reverse().join("");

    return (original===reverse);

};

// Do not edit below this line
module.exports = palindromes;
