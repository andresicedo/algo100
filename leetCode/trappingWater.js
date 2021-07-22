let trap = (arr) => {
    //base case min 3 num required to trap water
    if (arr.length < 3) return 0;
    let trappedWater = 0;
    let leftMaxArr = [];
    let rightMaxArr = [];
    leftMaxArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        leftMaxArr[i] = Math.max(currVal, leftMaxArr[i -  1]);
    }//max left num at each index
    rightMaxArr[arr.length - 1] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        let currVal = arr[i];
        rightMaxArr[i] = Math.max(currVal, rightMaxArr[i + 1])
    }//max right num at each index
    for (let i = 1; i < arr.length - 1; i++) {
        let currVal = arr[i];
        trappedWater += Math.min(leftMaxArr[i], rightMaxArr[i]) - currVal;
    }//add difference between smallest of left/right values and currVal to trapped water
    return trappedWater;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));//6
console.log(trap([4,2,0,3,2,5]));//9
console.log(trap([4,2,0,3,5,1]))//7