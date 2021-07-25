let twoSum = (numbers, target) => {
    //assign a left most variable and a right most variable
    let left = 0;
    let right = numbers.length - 1;
    //iterate over array under the condition that left is less than right
    while (left < right) {
        //establish a current some variable that adds left and right
        const currentSum = numbers[left] + numbers[right];
        //if the current sum is equal to our target sum
        if (currentSum === target) {
            return [left + 1, right + 1];
            //if the current sum is less than the target sum will 
            //increment the left var by 1
        } else if (currentSum < target) {
            left++;
            //if current sum is greater than our target sum
            //decrement our right variable by 1
        } else if (currentSum > target) {
            right--;
        }
    }
    //return an empty array if no two numbers equal the target sum
    return [];
}

console.log(twoSum([2,7,11,15], 9))//[1,2];