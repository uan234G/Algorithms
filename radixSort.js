// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

// src=https://reactgo.com/radix-sort-algorithm-javascript/

// setup
function getPosition(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// get num with most digits
function getMax(arr) {
    let max = 0;
    for (let num of arr) {
        if (max < num.toString().length) {
            max = num.toString().length;
        }
    }
    return max;
}