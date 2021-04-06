// sampling ---> https://dev.to/ christinamcmahon
// HELPERS
function swap(arr, a, b) { //simple swap
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const Compare = { // compareing values
    lessThan: -1,
    biggerThan: 1,
}
function returnCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.lessThan : Compare.biggerThan;
}
// BUBBLE SORTING
function bubbleSort(arr, compare = returnCompare) {
    // const length = arr.length
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1]) === Compare.biggerThan) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;

}
var y = [6, 14, 8, 67, 67, 32, 1, 0, 3, 5, 6, 7, 2, 1, 76, 7, 8, 6, 5, 3, 89, 23, 21];
console.log(bubbleSort(y));

// simple
function bubbleSort2(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};

var x = [6, 14, 8, 67, 67, 32, 1, 0, 3, 5, 6, 7, 2, 1, 76, 7, 8, 6, 5, 3, 89, 23, 21];
console.log(bubbleSort2(x));