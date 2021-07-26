let maxArea = (height) => {
    let l = 0;
    let r = height.length - 1;
    let area = 0;

    while (l < r) {
        //area is current area or length(index val) x width(diff between right/left)
        area = Math.max(area, Math.min(height[l],height[r]) * (r - l));
        //increment or decrement based on length
        height[l] < height[r] ? l++ : r--;
    }
    return area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))//49