const removeFromArray = function() {
    const array = arguments[0]

    for (let j = 1; j < arguments.length; j++) {
        for( let i=0; i<array.length; i++) {
            if (array[i]===arguments[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
