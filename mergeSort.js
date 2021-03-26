/*
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
        - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
        previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
        can therefore be merged into a sorted array.
*/
function merge(leftarr, rightarr) {
    result = [];
    leftIndx = 0;
    rightIndx = 0;

    while (leftIndx < leftarr.length && rightIndx < rightarr.length) {
        if (leftarr[leftIndx] < rightarr[rightIndx]) {
            result.push(leftarr[leftIndx]);
            leftIndx++;
        } else {
            result.push(rightarr[rightIndx]);
            rightIndx++;
        }
    }
    // in case one of the arrays has more items than the other
    while (leftIndx < leftarr.length) {
        result.push(leftarr[leftIndx]);
        leftIndx++;
    }

    while (rightIndx < rightarr.length) {
        result.push(rightarr[rightIndx]);
        rightIndx++;
    }

    return result;
}
const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const test1 = merge(sortedA4, sortedB4)
console.log(test1);