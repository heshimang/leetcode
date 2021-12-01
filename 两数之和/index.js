/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const returnArr = []
  for(var i = 0; i < nums.length; i++) {
    for(var j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        if(i < j) {
          returnArr.push(i, j)
        } else {
          returnArr.push(j, i)
        }
        return returnArr
      }
    }
  }
};

var nums = [2,5,5,11]


var returnArr = twoSum(nums, 10)
console.log(returnArr);
