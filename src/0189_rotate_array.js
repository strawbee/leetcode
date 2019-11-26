/**
 * Rotate Array
 * @url https://leetcode.com/problems/rotate-array/
 * @difficulty easy
 *
 * @input array [arr] and non-negative number of steps [k]
 * @output array
 *
 * Rotate an array by k steps, in place.
 */
function rotate(arr, k) {
  if (arr.length < 2) return arr;
  const steps = k % arr.length;

  // Reverse entire array
  for (let i = 0; i < ~~(arr.length / 2); i++) {
    _swap(arr, i, arr.length - 1 - i);
  }

  // Reverse first half up to k
  for (let i = 0; i < ~~(steps / 2); i++) {
    _swap(arr, i, steps - 1 - i);
  }

  // Reverse second half starting from k
  for (let i = steps; i < ~~((arr.length + steps) / 2); i++) {
    _swap(arr, i, arr.length - 1 - i + steps);
  }

  return arr;
}

/**
 * Helper function: swap two elements in an array
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
function _swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * @comments
 * This is the totally unintuitive way that I would never have thought of if
 * I hadn't seen this problem before. If you reverse the entire array, then
 * reverse each of the halves, you achieve the desired result, and you can do
 * so in place.
 *
 * @time_complexity O(n). We traverse the entire array twice.
 * @space_complexity O(1). We take up only constant extra space that does not
 * increase depending on the size of the input.
 */
