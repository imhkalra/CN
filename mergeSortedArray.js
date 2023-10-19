/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0, j = 0, k = 0;
    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0, n);
    let output = [];
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            output[k] = nums1[i];
            i++;
            k++;
        }
        else {
            output[k] = nums2[j];
            j++;
            k++;
        }
    }
    while (i !== m) {
        output[k] = nums1[i];
        i++;
        k++;
    }
    while (j !== n) {
        output[k] = nums2[j];
        j++;
        k++;
    }
    return output;
};

console.log(merge([0], 0, [1], 1));

