let trap = (arr) => {
    //base case min 3 num required to trap water
    if (arr.length < 3) return 0;
    //traverse arr to find left max and right max values for each idx
    let leftMaxArr = [0];
    let rightMaxArr = [0];
    let currMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const currNum = arr[i];
        currMax = Math.max(currNum, currMax);
        leftMaxArr.push(currMax);
    }
    currMax = arr[arr.length -1];
    for (let i = arr.length -2; i >= 0; i--) {
        const currNum = arr[i];
        currMax = Math.max(currMax, currNum);
        rightMaxArr.push(currMax)
    }
    return leftMaxArr;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));//6
console.log(trap([4,2,0,3,2,5]));//9