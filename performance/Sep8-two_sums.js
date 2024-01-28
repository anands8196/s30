/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let obj = {};
	for(let i = 0; i < nums.length; i++) {
		const currentValue = nums[i];
		if(obj[target - currentValue] !== undefined) {
			return [obj[target - currentValue], i];
		}
		obj[currentValue] = i;
	}
	return [];
}