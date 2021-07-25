let findMedianSortedArrays = (nums1, nums2) => {
    let lowerMed;
    let upperMed;
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        nums1.push(num);
        nums1.sort((a,b) => a-b);
    }
    if (nums1.length % 2 === 0) {
        lowerMed = nums1[(nums1.length / 2) -1];
        upperMed = nums1[nums1.length / 2];

    } else {
        return nums1[Math.floor(nums1.length / 2)];
    }
    return getMed(lowerMed, upperMed);
}

let getMed = (num1, num2) => {
    return (num1 + num2) / 2;
}


console.log(findMedianSortedArrays([1,2], [3,4]))//2.5
console.log(findMedianSortedArrays([1,2,3,4], [3,4,5,6]))//3.5
console.log(findMedianSortedArrays([1,3], [2,7]))//2.5
console.log(findMedianSortedArrays([1,2,3,4], [3,4,5,6,7]))//4
