let numIdenticalPairs = (nums) => {
    let pairs = 0;
    let storage = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!storage[num]) {
            storage[num] = 1;
        } else {
            storage[num]++;
            pairs += storage[num] - 1;
        }
    }
    return pairs;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))//4