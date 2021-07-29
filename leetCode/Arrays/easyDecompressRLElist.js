let decompressRLElist = (nums) => {
    let dcomList = [];
    for (let i = 0; i < nums.length; i+=2) {
        let freq = nums[i];
        let val = nums[i+1];
        while (freq !== 0) {
            dcomList.push(val);
            freq--;
        };
    };
    return dcomList;
}

console.log(decompressRLElist([1, 2, 3, 4]));//[2,4,4,4]
console.log(decompressRLElist([1, 1, 2, 3]));//[1,3,3]