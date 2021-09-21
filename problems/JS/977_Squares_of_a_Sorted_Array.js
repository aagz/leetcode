const sortedSquares = function(nums) {

  let l = 0;
  let r = nums.length - 1;
  let res = [];

  let pos = r;

  while (l <= r) {
    nums[l] ** 2 > nums[r] ** 2
      ? res[pos--] = nums[l++] ** 2
      : res[pos--] = nums[r--] ** 2
  }
  return res;
}