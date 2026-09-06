var once = function(fn) {
    var called = false;

    return function(...args) {
        if (called) {
            return undefined;
        }

        called = true;
        return fn.apply(this, args);
    }
};

var addOnce = once(function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
});

console.log(addOnce(2, 3));
console.log(addOnce(2, 3));