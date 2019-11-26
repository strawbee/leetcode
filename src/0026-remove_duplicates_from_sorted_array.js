/**
 * Remove Duplicates from Sorted Array
 * @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @difficulty easy
 *
 * @input sorted array
 * @output array length
 *
 * Remove duplicates in place. Elements beyond the returned length are ignored.
 */

function removeDuplicates(nums) {
  if (nums.length <= 1) return nums.length;

  let current_idx = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i - 1]) {
      nums[current_idx] = nums[i];
      current_idx++;
    }
  }
  return current_idx;
}

/**
 * @comments
 * current_idx is a pointer to the current index of the array without
 * duplicates.
 *
 * @time_complexity O(n). At most we traverse the nums array once, if no
 * duplicates exist.
 * @space_complexity O(1). We take up only constant extra space that does not
 * increase depending on the size of the input.
 */