let runningSum = (nums) => {
    let sum = nums[0];
    let result = [sum];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        result.push(sum+=num);
    };
    return result;
}

console.log(runningSum([1,2,3,4]))