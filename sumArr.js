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
console.log(sumArray(nums1)); // output = 6


// Add params if needed for recursion
//  * Recursively sums the given array.

function sumArr2(nums, sum = 0, i = 0) {
    if (i === nums.length) {
        return sum;
    }
    return sumArr2(nums, sum + nums[i], i + 1);
}

let nums2 = nums1;

console.log(sumArr2(nums2)); //output is 6