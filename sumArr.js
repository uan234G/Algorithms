/*
    Recursively sum an arr of ints
*/

// const nums1 = [1, 2, 3];
// const expected1 = 6;


function sumArray(nums, i = 0) {
    if (i === nums.length) {
        return 0;
    }
    return nums[i] + sumArray(nums, i + 1);
}
let nums1 = [1, 2, 3];
console.log(sumArray(nums1))