/*
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
    2. create mergeSort function to sort the provided array

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
/*
[
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
]
*/

function mergeSort(nums) {
    if (nums.length === 1) {
        return nums;
    }

    const middle = Math.floor(nums.length / 2); // middle item
    const left = nums.slice(0, middle); // items on the left side
    const right = nums.slice(middle); // items on the right side

    return merge(mergeSort(left), mergeSort(right));
}

const test2 = mergeSort([2, 5, 4, 78, 6, 1, 2, 0, 9, 3]);
console.log(test2);
/*
[
    0, 1, 2, 2, 3,
    4, 5, 6, 9, 78
]
*/
