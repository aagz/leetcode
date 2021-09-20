const solution = function(isBadVersion) {
  return function(n) {
      let low = 1;
      let high = n;

      while(low + 1 < high) {

          let mid = low + (high - low) / 2 + 0.5 | 0;

          if (isBadVersion(mid)) {
              high = mid;
          } else {
              low = mid;
          }
      }

      if (isBadVersion(low)) {
          return low;
      }

      return high;
  };
};