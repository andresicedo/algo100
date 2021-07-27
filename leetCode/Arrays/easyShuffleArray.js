/*
Solution:
Time Complexity : O(n)
Space Complexity: O(n)
*/

let shuffle = (nums, n) => {
    let result = [];
    for (let i = 0; i < n; i++) result.push(nums[i], nums[i+n]);
    return result;
}

console.log(shuffle([2,5,1,3,4,7], 3));//[2,3,5,4,1,7]