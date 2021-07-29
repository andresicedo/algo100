let createTargetArray = (nums, index) => {
    const target = [];
    for (let i = 0; i < index.length; i++) {
        target.splice(index[i],0,nums[i]);
    }
    return target;
}


console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))//[0,4,1,3,2]
