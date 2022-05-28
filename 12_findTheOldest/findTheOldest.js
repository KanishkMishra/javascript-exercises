const findTheOldest = function(people) {
    const oldest = people.reduce(function(p1, p2) {
        if(p1.yearOfDeath===undefined) p1.yearOfDeath = new Date().getFullYear();
        if(p2.yearOfDeath===undefined) p2.yearOfDeath = new Date().getFullYear();

        if ((p1.yearOfDeath-p1.yearOfBirth) < (p2.yearOfDeath-p2.yearOfBirth))
            return p2;
        else 
            return p1;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
