let buildArray = (nums) => {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        ans[i] = nums[num];
    }
    return ans;
}

console.log(buildArray([0,2,1,5,3,4]))