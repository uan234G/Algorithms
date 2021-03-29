// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

function twoSum(nums, target) {
    const idx = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (idx.hasOwnProperty(diff)) {
            const appendIdk = idx[diff];
            return [appendIdk, i];
        }
        idx[num] = i;
    }
    return []
}

const nums1 = [2, 11, 7, 15];
const targetSum = 9;

console.log(twoSum(nums1, targetSum));
// expected1 answer = [0, 2];
// // Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9

/**
 * - Time: O(n^2) quadratic.
 * - Space: O(1) constant.
 */
function twoSumSpaceOptimized(nums, targetSum) {
    const indexes = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] === targetSum) {
                indexes.push(i, j);
                break;
            }
        }
    }
    return indexes;
}