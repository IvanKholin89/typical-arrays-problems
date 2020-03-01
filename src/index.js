
exports.min = function min (array) {
    if (!array || !array.length) {
        return 0;
    } else {
        return Math.min(...array);
    }
}

exports.max = function max (array) {
    if (!array || !array.length) {
        return 0;
    } else {
        return Math.max(...array);
    }
}

exports.avg = function avg (array) {
    var result = 0;
    if (!array || !array.length) {
        return 0;
    } else {
        for (var i of array) {
            result += i;
        }
    }
  return result/array.length;
}
