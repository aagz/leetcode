const searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = (high + low) / 2 + 0.5 | 0;

    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] == target) {
      return mid;
    }
  }

  return nums[mid] < target ? mid + 1 : mid;
};