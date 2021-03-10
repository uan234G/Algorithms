//  selection sort

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    return arr;
}
// test case
console.log(selectionSort([4, 3, 76, 65, 6, 65, 55, 54, 3, 2, 67, 43, 5, 56, 0, 95, 9, 20, 2133]))