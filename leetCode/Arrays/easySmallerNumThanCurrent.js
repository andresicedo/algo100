let smallerNumbersThanCurrent = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let greaterThan = isGreater(nums, num)
        result.push(greaterThan);
    }
    return result;
}

let isGreater = (arr, target) => {
    let smaller = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < target) {
            smaller++;
        } else {
            continue;
        }
    }
    return smaller;
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))//[4,0,1,1,3]