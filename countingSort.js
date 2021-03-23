function countingSort(arr, min, max) {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};
console.log(countingSort([1, 5, 4, 2, 9, 6, 8, 7, 10, 0], 0, 10));
/*
[
    0, 1, 2, 4,  5,
    6, 7, 8, 9, 10
]
*/

