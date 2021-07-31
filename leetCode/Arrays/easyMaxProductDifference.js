let maxProductDifference = (nums) => {
    nums.sort((a,b) => a-b);
    let highOne = nums[nums.length -1];
    let highTwo = nums[nums.length -2];
    let lowOne = nums[0];
    let lowTwo = nums[1];
    return (highOne * highTwo) - (lowOne * lowTwo);
}

console.log(maxProductDifference([5,6,2,7,4]))//34
console.log(maxProductDifference([4,2,5,9,7,4,8]))//64
