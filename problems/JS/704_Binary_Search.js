function search(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = (high + low) / 2 + 0.5 | 0;

    if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] == target) {
      return mid;
    }
  }

  return -1;
}