let test = [-4, -1, 0, 1, 3, 5];

const squares = function(nums) {

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

console.log(squares(test))

const s = function(nums) {
  return nums.sort((a, b) => a ** 2 - b ** 2);
}

console.log(s(test));