var sortedSquares = function(nums) {
    return nums.map((n) => {
      return n * n
    }).sort((a, s) => {
      return a - s
    });
};
  