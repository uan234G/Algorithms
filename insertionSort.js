let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};
console.log(insertionSort([1, 3, 4, 6, 7, 7, 4, 0, 12, 23, 33, 444, 5, 3, 9]));
/*output
[
    0,  1,   3, 3, 4,  4,
    5,  6,   7, 7, 9, 12,
    23, 33, 444
]
*/
