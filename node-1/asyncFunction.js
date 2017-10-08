var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(1000+1));
    if (v % 2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

const foo = "bar";

export { evenDoubler, foo };
