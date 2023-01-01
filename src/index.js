module.exports = function reverse(n) {
    return Number([Math.abs(n)].join("").split("").reverse().join(""));
};
