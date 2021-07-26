let twoSum = (nums, target) => {
    let storage = {};
    for (let i = 0; i < nums.length; i++) {
        let thisNum = nums[i];
        storage[thisNum] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (storage.hasOwnProperty(diff) && storage[diff] !== i) {
            return [i, storage[diff]];
        }
    }
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

console.log(twoSum([2, 7, 11, 15], 9))//[0,1]
console.log(twoSum([3, 2, 4], 6))//[1,2]
console.log(twoSum([1, 2, 3, 7], 9))//[1,3]
console.log(twoSum([1, 7, 3, 8, 15, 16, 14], 21))//[1,6]
console.log(twoSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 31))//[14,15]